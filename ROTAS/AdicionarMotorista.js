import axios from "axios";

const motoristasAPI = axios.create({
  baseURL: "http://localhost:3000/motoristas/"
});

async function getMotoristas() {
  try {
    const response = await motoristasAPI.get('/');
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados na API", error);
  }
}

async function criarMotorista(motorista) {
  try {
    const response = await motoristasAPI.post('/', motorista);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar motorista na API", error);
  }
}

async function atualizarMotorista(id, novoDados) {
  try {
    const response = await motoristasAPI.put(`/${id}`, novoDados);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar motorista na API", error);
  }
}

async function removerMotorista(id) {
  try {
    const response = await motoristasAPI.delete(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao excluir cadastro de motorista com o ID ${id} na API`, error);
  }
}

export {
  getMotoristas,
  criarMotorista,
  atualizarMotorista,
  removerMotorista
};
