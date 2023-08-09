using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace csharpapi.Migrations
{
    /// <inheritdoc />
    public partial class criacaoTabelaImovel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Imoveis",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ExibirNoSite = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Destaque = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SuperDestque = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Lancamento = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TemPlaca = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Exclusivo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DataCadastro = table.Column<DateTime>(type: "datetime2", nullable: true),
                    DataAtualizacao = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Categoria = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EstadoDoEdificio = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TipoGaragem = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DimensaoTerreno = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Rua = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Numero = table.Column<int>(type: "int", nullable: false),
                    UF = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CEP = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Bairro = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Cidade = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Admnistradora = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Construtora = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Proprietario = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TelefoneProp = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EmailProp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EstadoConstrucao = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DataDeEntrega = table.Column<DateTime>(type: "datetime2", nullable: true),
                    AnoDeConstrucao = table.Column<DateTime>(type: "datetime2", nullable: true),
                    NumeroAndares = table.Column<int>(type: "int", nullable: true),
                    ImoveisPorAndar = table.Column<int>(type: "int", nullable: true),
                    TotalDeImoveis = table.Column<int>(type: "int", nullable: true),
                    QntElevadores = table.Column<int>(type: "int", nullable: true),
                    DescricaoSite = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TituloSite = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Quartos = table.Column<int>(type: "int", nullable: true),
                    Suites = table.Column<int>(type: "int", nullable: true),
                    Banheiro = table.Column<int>(type: "int", nullable: true),
                    QntGaragem = table.Column<int>(type: "int", nullable: true),
                    Mobilia = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AreaTotalConstruida = table.Column<decimal>(type: "decimal(18,2)", nullable: true),
                    AreaPrivativa = table.Column<decimal>(type: "decimal(18,2)", nullable: true),
                    AreaUltil = table.Column<decimal>(type: "decimal(18,2)", nullable: true),
                    NumeroMatricula = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NumeroIptu = table.Column<int>(type: "int", nullable: true),
                    Captador = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Corretor = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ComissaoVenda = table.Column<decimal>(type: "decimal(18,2)", nullable: true),
                    ValorAdmLocacao = table.Column<decimal>(type: "decimal(18,2)", nullable: true),
                    DescricaoInterna = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ValorDoImovel = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    ValorLocacao = table.Column<decimal>(type: "decimal(18,2)", nullable: true),
                    ValorCondominio = table.Column<decimal>(type: "decimal(18,2)", nullable: true),
                    SeguroIncendio = table.Column<decimal>(type: "decimal(18,2)", nullable: true),
                    ValorIptu = table.Column<decimal>(type: "decimal(18,2)", nullable: true),
                    MCMV = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Financiavel = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Bicicletario = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Brinquedoteca = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ChurrasqueiraColetiva = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EspacoGourmet = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PiscinaAdulta = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PiscinaInfantil = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Playground = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    QuadraPoliEsportiva = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CampoFutebol = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SalaoDeFestas = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SalaDeJogos = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Sauna = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Spa = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Office = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PetPlace = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Quiosque = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EspacoMulher = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CarWash = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Academia = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AcademiaLivre = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AquecimentoCentral = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Gerador = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Deposito = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ElevadorDeServico = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EntradaDeServico = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    VagaVisitante = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Guarita = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Portaria24Hrs = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Lavanderia = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Zelador = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Vigilancia = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Imoveis", x => x.ID);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Imoveis");
        }
    }
}
