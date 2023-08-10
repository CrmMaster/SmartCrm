using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace CsharpApi.Models
{
    public class Contexto : DbContext
    {
        public DbSet<Contato> Contatos { get; set; }
        public DbSet<Imovel> Imoveis { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }

        public Contexto(DbContextOptions<Contexto> options) : base(options)
        {

        }
    }
}