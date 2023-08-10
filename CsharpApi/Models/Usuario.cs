using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CsharpApi.Models
{
    public class Usuario
    {
        public int ID { get; set; }
        public string Nome { get; set; }
        public string SobreNome { get; set; }
        public DateTime DataNascimento { get; set; }
        public string Celular { get; set; }
        public string Cpf { get; set; }
        public string Endreco { get; set; }
        public string Uf { get; set; }
        public string Estado { get; set; }
        public string Cep { get; set; }
        public int Plano { get; set; }
        public int QntdUsuario { get; set; }
        public DateTime DataCadastro { get; set; }
        public string Senha { get; set; }
        public string RepetirSenha { get; set; }

    }
}