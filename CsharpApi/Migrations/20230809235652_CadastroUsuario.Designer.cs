﻿// <auto-generated />
using System;
using CsharpApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace csharpapi.Migrations
{
    [DbContext(typeof(Contexto))]
    [Migration("20230809235652_CadastroUsuario")]
    partial class CadastroUsuario
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.9")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("CsharpApi.Models.Contato", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                    b.Property<string>("Bairro")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CEP")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CPF")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CanalDeOrigem")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Celular")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Cidade")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Complemento")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("DataCadastro")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("DataNascimento")
                        .HasColumnType("datetime2");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("EstadoCivil")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FaixaDePreco")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Genero")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LocalizacaoDesejada")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nascionalidade")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ObsDeCadastro")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ObsGeral")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PreferenciaContato")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RG")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Rua")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SobreNome")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TipoImovelDesejado")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UF")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("Contatos");
                });

            modelBuilder.Entity("CsharpApi.Models.Imovel", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                    b.Property<string>("Academia")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("AcademiaLivre")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Admnistradora")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("AnoDeConstrucao")
                        .HasColumnType("datetime2");

                    b.Property<string>("AquecimentoCentral")
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal?>("AreaPrivativa")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal?>("AreaTotalConstruida")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal?>("AreaUltil")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("Bairro")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("Banheiro")
                        .HasColumnType("int");

                    b.Property<string>("Bicicletario")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Brinquedoteca")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CEP")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CampoFutebol")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Captador")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CarWash")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Categoria")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ChurrasqueiraColetiva")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Cidade")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal?>("ComissaoVenda")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("Construtora")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Corretor")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("DataAtualizacao")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("DataCadastro")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("DataDeEntrega")
                        .HasColumnType("datetime2");

                    b.Property<string>("Deposito")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DescricaoInterna")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DescricaoSite")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Destaque")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DimensaoTerreno")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ElevadorDeServico")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("EmailProp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("EntradaDeServico")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("EspacoGourmet")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("EspacoMulher")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("EstadoConstrucao")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("EstadoDoEdificio")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Exclusivo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ExibirNoSite")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Financiavel")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Gerador")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Guarita")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("ImoveisPorAndar")
                        .HasColumnType("int");

                    b.Property<string>("Lancamento")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Lavanderia")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MCMV")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Mobilia")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Numero")
                        .HasColumnType("int");

                    b.Property<int?>("NumeroAndares")
                        .HasColumnType("int");

                    b.Property<int?>("NumeroIptu")
                        .HasColumnType("int");

                    b.Property<string>("NumeroMatricula")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Office")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PetPlace")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PiscinaAdulta")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PiscinaInfantil")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Playground")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Portaria24Hrs")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Proprietario")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("QntElevadores")
                        .HasColumnType("int");

                    b.Property<int?>("QntGaragem")
                        .HasColumnType("int");

                    b.Property<string>("QuadraPoliEsportiva")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("Quartos")
                        .HasColumnType("int");

                    b.Property<string>("Quiosque")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Rua")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SalaDeJogos")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SalaoDeFestas")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Sauna")
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal?>("SeguroIncendio")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("Spa")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Status")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("Suites")
                        .HasColumnType("int");

                    b.Property<string>("SuperDestque")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TelefoneProp")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TemPlaca")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TipoGaragem")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TituloSite")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("TotalDeImoveis")
                        .HasColumnType("int");

                    b.Property<string>("UF")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("VagaVisitante")
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal?>("ValorAdmLocacao")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal?>("ValorCondominio")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal>("ValorDoImovel")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal?>("ValorIptu")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal?>("ValorLocacao")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("Vigilancia")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Zelador")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("Imoveis");
                });
#pragma warning restore 612, 618
        }
    }
}
