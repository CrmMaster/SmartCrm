using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace csharpapi.Migrations
{
    /// <inheritdoc />
    public partial class trocaNomeColunaCidade : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Estado",
                table: "Usuarios",
                newName: "Cidade");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Cidade",
                table: "Usuarios",
                newName: "Estado");
        }
    }
}
