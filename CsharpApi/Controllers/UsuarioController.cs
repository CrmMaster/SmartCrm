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
    public class UsuarioController : ControllerBase
    {
        private readonly Contexto _contexto;

        public UsuarioController(Contexto contexto)
        {
            _contexto = contexto;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Usuario>>> PegarTodos()
        {
            return await _contexto.Usuarios.ToListAsync();
        }

        [HttpGet("{ID}")]
        public async Task<ActionResult<Usuario>> PegarPeloID(int ID)
        {
            Usuario usuario = await _contexto.Usuarios.FindAsync(ID);
            if (usuario == null)
                return NotFound();

            return usuario;
        }

        [HttpPost]
        public async Task<ActionResult<Usuario>> SalvarUsuario(Usuario usuario)
        {
            await _contexto.Usuarios.AddAsync(usuario);
            await _contexto.SaveChangesAsync();

            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> AtializarUsuario(Usuario usuario)
        {
            _contexto.Usuarios.Update(usuario);
            await _contexto.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete("{ID}")]
        public async Task<ActionResult> ExcluirUsuario(int ID)
        {
            Usuario usuario = await _contexto.Usuarios.FindAsync(ID);
            if (usuario == null)
                return NotFound();

            _contexto.Remove(usuario);
            await _contexto.SaveChangesAsync();
            return Ok();
        }
    }
}