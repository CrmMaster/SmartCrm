using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CsharpApi.Models;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CsharpApi.Controllers
{
    [ApiController]
    [Microsoft.AspNetCore.Mvc.Route("api/[controller]")]
    
    public class ContatoController : ControllerBase
    {
        private readonly Contexto _contexto;

        public ContatoController(Contexto contexto)
        {
            _contexto = contexto;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Contato>>> PegarTodos()
        {
            return await _contexto.Contatos.ToListAsync();
        }

        [HttpGet("{ID}")]
        public async Task<ActionResult<Contato>> PegarPeloID(int ID)
        {
            Contato contato = await _contexto.Contatos.FindAsync(ID);
            if (contato == null)
                return NotFound();

            return contato;
        }

        [HttpPost]
        public async Task<ActionResult<Contato>> Salvarcontato(Contato contato)
        {
            await _contexto.Contatos.AddAsync(contato);
            await _contexto.SaveChangesAsync();

            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> Atializarcontato(Contato contato)
        {
            _contexto.Contatos.Update(contato);
            await _contexto.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete("{ID}")]
        public async Task<ActionResult> Excluircontato(int ID)
        {
            Contato contato = await _contexto.Contatos.FindAsync(ID);
            if (contato == null)
                return NotFound();

            _contexto.Remove(contato);
            await _contexto.SaveChangesAsync();
            return Ok();
        }
    }
}