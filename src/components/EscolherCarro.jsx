import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';


const carros = [
  { nome: 'Fiat Uno', cor: 'Vermelho', ano: 2015 },
  { nome: 'Volkswagen Gol', cor: 'Prata', ano: 2018 },
  { nome: 'Chevrolet Onix', cor: 'Preto', ano: 2020 },
];

function CarroCard({ carro, selecionado, onSelecionar }) {
  return (
    <div
      className={`shadow-lg border rounded-lg p-6 m-2 cursor-pointer transition-all duration-200
        ${selecionado ? 'border-blue-500 bg-blue-100 scale-105' : 'border-gray-300 bg-white hover:bg-blue-50 hover:scale-105'}
      `}
      onClick={() => onSelecionar(carro)}
    >
      <h3 className="text-xl font-bold text-blue-700 mb-2">{carro.nome}</h3>
      <p className="text-gray-700">Cor: <span className="font-semibold">{carro.cor}</span></p>
      <p className="text-gray-700">Ano: <span className="font-semibold">{carro.ano}</span></p>
    </div>
  );
}

function EscolherCarro() {
  const [carroSelecionado, setCarroSelecionado] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 flex flex-col items-center justify-start py-10">
      <Header titulo="Escolha um carro!" />
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-xl">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-800 drop-shadow">
          Escolha seu carro
        </h2>
        <div className="flex flex-col gap-4">
          {carros.map((carro) => (
            <CarroCard
              key={carro.nome}
              carro={carro}
              selecionado={carroSelecionado?.nome === carro.nome}
              onSelecionar={setCarroSelecionado}
            />
          ))}
        </div>
        {carroSelecionado && (
          <div className="mt-8 p-6 border-2 border-green-400 rounded-lg bg-green-100 text-green-900 text-center shadow">
            <h4 className="font-bold text-lg mb-2">Carro selecionado:</h4>
            <p className="text-xl">
              {carroSelecionado.nome} - {carroSelecionado.cor} - {carroSelecionado.ano}
            </p>
          </div>
        )}
      </div>
      <Footer ano={2025} />
    </div>
  );
}

export default EscolherCarro;