export class PaginacaoResonse<T> {
  totalElementos: number;
  quantidadePorPagina: number;
  pagina: number;
  conteudo: T[];
}