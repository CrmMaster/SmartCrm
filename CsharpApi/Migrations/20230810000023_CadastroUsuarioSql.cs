using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace csharpapi.Migrations
{
    /// <inheritdoc />
    public partial class CadastroUsuarioSql : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
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
        }
    }
}
