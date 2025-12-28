// impostor.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' }) 
export class ImpostorService {

  // 🔢 número total de lotes disponibles
  private readonly TOTAL_LOTES = 1;

  async shuffleImpostor(numPlayers: number, level: number): Promise<string[]> {
    const results: string[] = [];

  
    // 📥 import dinámico del JSON correspondiented
    const { default: impostorWords } = await import(
      `../../../public/data/impostor_word/impostor_${level}.json`
    );

    // impostorWords ahora es un JSON del tipo { palabra: pista }
    const palabras = Object.keys(impostorWords);

    // 🎯 elegimos palabra y pista aleatoria
    const randomIndex = Math.floor(Math.random() * palabras.length);
    const palabraSeleccionada = palabras[randomIndex];
    const pistaSeleccionada = impostorWords[palabraSeleccionada];

    // 🕵️‍♂️ quién es el impostor
    const impostorPlayer = Math.floor(Math.random() * numPlayers);

    // 🧩 repartimos
    for (let i = 0; i < numPlayers; i++) {
      if (i === impostorPlayer) {
        results.push(`IMPOSTOR — pista: ${pistaSeleccionada}`);
      } else {
        results.push(`palabra clave: ${palabraSeleccionada}`);
      }
    }

    return results;
  }
}
