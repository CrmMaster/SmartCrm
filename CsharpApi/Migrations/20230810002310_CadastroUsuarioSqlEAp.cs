using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace csharpapi.Migrations
{
    /// <inheritdoc />
    public partial class CadastroUsuarioSqlEAp : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Imovel",
                table: "Imovel");

            migrationBuilder.RenameTable(
                name: "Imovel",
                newName: "Imoveis");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Imoveis",
                table: "Imoveis",
                column: "ID");

            migrationBuilder.CreateTable(
                name: "Usuarios",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SobreNome = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DataNascimento = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Celular = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Cpf = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Endreco = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Uf = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Estado = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Cep = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Plano = table.Column<int>(type: "int", nullable: false),
                    QntdUsuario = table.Column<int>(type: "int", nullable: false),
                    DataCadastro = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Senha = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RepetirSenha = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuarios", x => x.ID);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Usuarios");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Imoveis",
                table: "Imoveis");

            migrationBuilder.RenameTable(
                name: "Imoveis",
                newName: "Imovel");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Imovel",
                table: "Imovel",
                column: "ID");
        }
    }
}
