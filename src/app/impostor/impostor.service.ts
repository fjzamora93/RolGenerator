// impostor.service.ts
import { Injectable } from '@angular/core';
import IMPOSTOR_WORDS_LIST from '../../../public/data/impostor.json';
import { ImpostorWord } from './impostor.interface';

@Injectable({ providedIn: 'root' }) 
export class ImpostorService {

  public impostorWord : ImpostorWord[] = IMPOSTOR_WORDS_LIST;

  shuffleImpostor(numPlayers: number): string[] {
    const results: string[] = [];

    // 1️⃣ Elegimos palabra/pista aleatoria
    const randomIndex = Math.floor(Math.random() * this.impostorWord.length);
    const selected = this.impostorWord[randomIndex];

    // 2️⃣ Elegimos un impostor al azar entre los jugadores
    const impostorPlayer = Math.floor(Math.random() * numPlayers);

    // 3️⃣ Repartimos roles
    for (let i = 0; i < numPlayers; i++) {
      if (i === impostorPlayer) {
        results.push(`IMPOSTOR — pista: ${selected.pista}`);
      } else {
        results.push(`palabra clave: ${selected.palabra}`);
      }
    }

    return results;
  }
}
