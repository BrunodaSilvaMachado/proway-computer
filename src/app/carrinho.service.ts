import { Injectable } from '@angular/core';
import { IProduto, IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];
  constructor() { }

  obter(){
    this.itens= JSON.parse(localStorage.getItem("carrinho") || "[]");
    return this.itens;
  }

  adicionar(produto: IProdutoCarrinho){
    this.itens.push(produto);
    this.saveLocalStorage();
  }

  limpar(){
    this.itens = [];
    localStorage.clear();
  }

  remover(id:number){
    this.itens = this.itens.filter(i=>i.id !== id);
    this.saveLocalStorage();
  }

  private saveLocalStorage(){
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

}
