using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CsharpApi.Models
{
    public class Imovel
    {
        public int ID { get; set; }
        public string? ExibirNoSite { get; set; }
        public string? Destaque { get; set; }
        public string? SuperDestque { get; set; }
        public string? Lancamento { get; set; }
        public string? TemPlaca { get; set; }
        public string? Exclusivo { get; set; }
        public DateTime? DataCadastro { get; set; }
        public DateTime? DataAtualizacao { get; set; }
        public string Categoria { get; set; }
        public string Status { get; set; }
        public string? EstadoDoEdificio { get; set; }
        public string? TipoGaragem { get; set; }
        public string? DimensaoTerreno { get; set; }
        public string Rua { get; set; }
        public int Numero { get; set; }
        public string UF { get; set; }
        public string CEP { get; set; }
        public string Bairro { get; set; }
        public string Cidade { get; set; }
        public string? Admnistradora { get; set; }
        public string? Construtora { get; set; }
        public string? Proprietario { get; set; }
        public string TelefoneProp { get; set; }
        public string? EmailProp { get; set; }
        public string? EstadoConstrucao { get; set; }
        public DateTime? DataDeEntrega { get; set; }
        public DateTime? AnoDeConstrucao { get; set; }
        public int? NumeroAndares { get; set; }
        public int? ImoveisPorAndar { get; set; }
        public int? TotalDeImoveis { get; set; }
        public int? QntElevadores { get; set; }
        public string? DescricaoSite { get; set; }
        public string? TituloSite { get; set; }
        public int? Quartos { get; set; }
        public int? Suites { get; set; }
        public int? Banheiro { get; set; }
        public int? QntGaragem { get; set; }
        public string? Mobilia { get; set; }
        public decimal? AreaTotalConstruida { get; set; }
        public decimal? AreaPrivativa { get; set; }
        public decimal? AreaUltil { get; set; }
        public string? NumeroMatricula { get; set; }       
        public int? NumeroIptu { get; set; } 
        public string Captador { get; set; }
        public string Corretor { get; set; }
        public decimal? ComissaoVenda { get; set; }
        public decimal? ValorAdmLocacao { get; set; }
        public string? DescricaoInterna { get; set; }
        public decimal ValorDoImovel { get; set; }
        public decimal? ValorLocacao { get; set; }
        public decimal? ValorCondominio { get; set; }
        public decimal? SeguroIncendio { get; set; }
        public decimal? ValorIptu { get; set; }
        public string? MCMV { get; set; }
        public string? Financiavel { get; set; }

        //lazer **************************************************************************************************
        public string? Bicicletario { get; set; }
        public string? Brinquedoteca { get; set; }
        public string? ChurrasqueiraColetiva { get; set; }
        public string? EspacoGourmet { get; set; }
        public string? PiscinaAdulta { get; set; }
        public string? PiscinaInfantil { get; set; }
        public string? Playground { get; set; }
        public string? QuadraPoliEsportiva { get; set; }
        public string? CampoFutebol { get; set; }
        public string? SalaoDeFestas { get; set; }
        public string? SalaDeJogos { get; set; }
        public string? Sauna { get; set; }
        public string? Spa { get; set; }
        public string? Office { get; set; }
        public string? PetPlace { get; set; }
        public string? Quiosque { get; set; }
        public string? EspacoMulher { get; set; }
        public string? CarWash { get; set; }       
        public string? Academia { get; set; }
        public string? AcademiaLivre { get; set; }

        //condominio e outros **************************************************************************************************
        public string? AquecimentoCentral { get; set; }
        public string? Gerador { get; set; }
        public string? Deposito { get; set; }
        public string? ElevadorDeServico { get; set; }
        public string? EntradaDeServico { get; set; }
        public string? VagaVisitante { get; set; }
        public string? Guarita { get; set; }
        public string? Portaria24Hrs { get; set; }
        public string? Lavanderia { get; set; }
        public string? Zelador { get; set; }
        public string? Vigilancia { get; set; }
        
    }
}