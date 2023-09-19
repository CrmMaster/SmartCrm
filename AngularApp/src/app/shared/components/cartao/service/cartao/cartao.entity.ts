
export type CartaoForm = {
  endereco: {
    cep: string;
    endereco: string;
    bairro: string;
    cidade: string;
    estado: string;
    numero: number;
    complemento: string;
  };
  infoCartao: {
    apelido: string;
    numeroCartao: string;
    dataValidade: string;
    codigoSeguranca: number;
    tipoCartao: 'DEBITO' | 'CREDITO';
  };
};

export type CartaoDTO = {
  _id?: string
  apelido?: string;
  numeroCartao?: string;
  dataValidade?: string;
  codigoSeguranca?: number;
  tipoCartao?: 'DEBITO' | 'CREDITO';
  enderecoCobranca?: any;
  isPadrao?: boolean;
};

export function buildCartaoBody(form: CartaoForm): CartaoDTO {
  let cartao: CartaoDTO = {};

  cartao.apelido = form.infoCartao.apelido;
  cartao.numeroCartao = form.infoCartao.numeroCartao;
  cartao.dataValidade = form.infoCartao.dataValidade;
  cartao.codigoSeguranca = form.infoCartao.codigoSeguranca;
  cartao.tipoCartao = form.infoCartao.tipoCartao;
  cartao.enderecoCobranca = form.endereco
  cartao.isPadrao = false;

  return cartao;
}
