import { serve, Response } from 'https://deno.land/std/http/server.ts';
import { getDinos, getDinoById, createDino, Dino } from './database.ts';

const server = serve({ port: 3000 });

console.log('🦖  Running on http://localhost:3000');

for await (const request of server) {
  if (request.method === 'GET') {
    const response: Response = {
      body: JSON.stringify({ data: await getDinos() }),
    };
    request.respond(response);
  } else {
    const body = new TextDecoder().decode(await Deno.readAll(request.body));
    const data = new URLSearchParams(body);
    console.log(data);
    const dino: Dino = {
      name: data.get('name') || '',
      era: data.get('era') || '',
      diet: data.get('diet') || '',
      region: data.get('region') || '',
      feetTall: parseInt(data.get('feetTall') || '0'),
      feetLong: parseInt(data.get('feetLong') || '0'),
      pounds: parseInt(data.get('pounds') || '0'),
    };
    const { $oid } = await createDino(dino);
    const response: Response = {
      body: JSON.stringify({ data: await getDinoById($oid) }),
    };
    request.respond(response);
  }
}
