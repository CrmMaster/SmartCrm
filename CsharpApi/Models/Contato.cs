using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CsharpApi.Models
{
    public class Contato
    {
        public int ID { get; set; }
        public string Nome { get; set; }
        public string? SobreNome { get; set; }
        public string Celular { get; set; }
        public string? Email { get; set; }
        public string? CPF { get; set; }
        public string? RG { get; set; }
        public DateTime DataNascimento { get; set; }
        public DateTime DataCadastro{ get; set; }
        public string? Genero { get; set; }
        public string? EstadoCivil { get; set; }
        public string? Nascionalidade { get; set; }
        // INFORMAÇÕES DE ENDEREÇO DO CLIENTE
        public string? Rua { get; set; }
        public string? CEP { get; set; }
        public string? Bairro { get; set; }
        public string? Complemento { get; set; }
        public string? UF { get; set; }
        public string? Cidade { get; set; }
        // PREFERENCIAS DO CLIENTE EM CONTATO
        public string? PreferenciaContato { get; set; }
        public string? TipoImovelDesejado { get; set; }
        public string? LocalizacaoDesejada { get; set; }
        public string? FaixaDePreco { get; set; }
        public string? ObsDeCadastro { get; set; }
        public string? ObsGeral { get; set; }
        public string? CanalDeOrigem { get; set; }




    }
}