import { Q } from "@nozbe/watermelondb";
import { database } from "../database";
import TimerModel from "../database/models/timerModel";

const listenNtf = async (ntfId: string) => {
      try {
        const timers = await database.get<TimerModel>('timers').query(Q.where('ntf_id', ntfId)).fetch();
        
        if (timers && timers.length > 0) {
          const timerToUpdate = timers[0];

          if(!timerToUpdate.repeat) {
            await database.write(async () => {
              await timerToUpdate.update(() => {
                  timerToUpdate.is_done = true;
              })
            });
            
            console.log('Timer atualizado com sucesso:', timerToUpdate);
          }          
        } else {
          console.warn('Timer não encontrado para o ntfId:', ntfId);
        }
      } catch (error) {
        console.error('Erro ao atualizar o timer:', error);
      }
}

export default listenNtf