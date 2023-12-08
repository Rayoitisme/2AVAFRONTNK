
import React, { useState, useEffect } from "react";
import { getMotoristas, atualizarMotorista, removerMotorista } from "../Servicos/Motoristas";
import "../styles.css";

function Motoristas() {
  // Estados para controlar os dados dos motoristas e informações de edição
  const [motoristas, setMotoristas] = useState([]);
  const [edicao, setEdicao] = useState(null);
  const [nomeDoMotorista, setNomeDoMotorista] = useState("");
  const [telefoneDoMotorista, setTelefoneDoMotorista] = useState("");
  const [modeloDoCarro, setModeloDoCarro] = useState("");
  const [placaDoCarro, setPlacaDoCarro] = useState("");

  // Efeito que carrega a lista de motoristas ao montar o componente
  useEffect(() => {
    loadMotoristas();
  }, []);

  // Função assíncrona para carregar a lista de motoristas
  const loadMotoristas = async () => {
    try {
      const listaMotoristas = await getMotoristas();
      setMotoristas(listaMotoristas);
    } catch (error) {
      console.error("Erro ao carregar os motoristas: ", error);
    }
  }

  // Função para definir o estado de edição com os dados do motorista selecionado
  const handleEditar = (motorista) => {
    setEdicao(motorista._id);
    setNomeDoMotorista(motorista.nomeDoMotorista);
    setTelefoneDoMotorista(motorista.telefoneDoMotorista);
    setModeloDoCarro(motorista.modeloDoCarro);
    setPlacaDoCarro(motorista.placaDoCarro);
  };

  // Função assíncrona para atualizar os dados do motorista
  const handleAtualizar = async () => {
    try {
      await atualizarMotorista(edicao, {
        nomeDoMotorista: nomeDoMotorista,
        telefoneDoMotorista: telefoneDoMotorista,
        modeloDoCarro: modeloDoCarro,
        placaDoCarro: placaDoCarro,
      });

      setEdicao(null);
      setNomeDoMotorista("");
      setTelefoneDoMotorista("");
      setModeloDoCarro("");
      setPlacaDoCarro("");

      loadMotoristas();
    } catch (error) {
      console.error("Erro ao atualizar a lista de motoristas", error);
    }
  };

  // Função assíncrona para excluir um motorista
  const handleExcluir = async (id) => {
    try {
      await removerMotorista(id);
      loadMotoristas();
    } catch (error) {
      console.error("Erro ao excluir motorista: ", error);
    }
  };

  
  return (
    <section className="gerenciamento-de-motoristas">
  
    </section>
  );
}

export default Motoristas;
