import { Component, OnInit } from '@angular/core';
import { IProduto, produtos } from '../produtos';
import { ProdutosService } from '../produtos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  mprodutos: IProduto[] | undefined;
  constructor(
    private produtoService: ProdutosService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const produtos = this.produtoService.getAll();
    this.route.queryParamMap.subscribe(p=>{
      const descricao = p.get("descricao")?.toLocaleLowerCase();
      
      if(descricao){
        this.mprodutos = produtos.filter(a=>a.descricao.toLowerCase().includes(descricao));
        return;
      }
      this.mprodutos = produtos;
    });
  }
}
