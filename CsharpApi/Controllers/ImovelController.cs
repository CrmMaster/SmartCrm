using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CsharpApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CsharpApi.Controllers

{   [ApiController]
    [Microsoft.AspNetCore.Mvc.Route("api/[controller]")]
    public class ImovelController: ControllerBase
    {
        private readonly Contexto _contexto;

        public ImovelController(Contexto contexto)
        {
            _contexto = contexto;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Imovel>>> PegarTodos()
        {
            return await _contexto.Imoveis.ToListAsync();
        }

        [HttpGet("{ID}")]
        public async Task<ActionResult<Imovel>> PegarPeloID(int ID)
        {
            Imovel imovel = await _contexto.Imoveis.FindAsync(ID);
            if (imovel == null)
                return NotFound();

            return imovel;
        }

        [HttpPost]
        public async Task<ActionResult<Contato>> SalvarImovel(Imovel contato)
        {
            await _contexto.Imoveis.AddAsync(contato);
            await _contexto.SaveChangesAsync();

            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> Atializarcontato(Imovel contato)
        {
            _contexto.Imoveis.Update(contato);
            await _contexto.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete("{ID}")]
        public async Task<ActionResult> Excluircontato(int ID)
        {
            Imovel imovel = await _contexto.Imoveis.FindAsync(ID);
            if (imovel == null)
                return NotFound();

            _contexto.Remove(imovel);
            await _contexto.SaveChangesAsync();
            return Ok();
        }
        
    }
}