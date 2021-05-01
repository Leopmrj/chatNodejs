import { http } from "./http";
import "./websocket/client";
import "./websocket/admin";

http.listen(3333, () => console.log("Server is running on port 333"));


// AULA 01 - INICIO

/**
 * GET = Buscas
 * POST = Cria��o
 * PUT = Altera��o
 * DELETE = Excluir
 * PATCH = Alterar informa��o espec�fica
*/

// app.get("/", (request, response) => {
// 	// return response.send("Ola nlw 05")
// 	return response.json({
// 		message: "Ola nlw 05",
// 	})
// });

// app.post("/", (request, response) => {
// 	return response.json({ message: "Usuario cadastrado com sucesso" })
// });

// AULA 01 - FIM



