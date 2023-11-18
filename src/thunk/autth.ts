import { createAsyncThunk } from "@reduxjs/toolkit"
import { database } from "../database";
import { Q } from "@nozbe/watermelondb";

export const checkUser = createAsyncThunk(
    'auth/checkUser',
    async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
      try {
        const user = await database.get('users').query(
          Q.where('email', email),
          Q.where('password', password)
        ).fetch();
        
        if (user.length === 0) {
          // Não encontrou um usuário com as credenciais fornecidas
          return rejectWithValue('Credenciais inválidas');
        }
  
        // Retorne o usuário encontrado
        return user[0];
      } catch (error) {
        return rejectWithValue('Erro ao verificar as credenciais');
      }
    }
  );