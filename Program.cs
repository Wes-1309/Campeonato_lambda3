using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Globalization;
using static System.Console;

namespace Lambda3
{
    class Program
    {
        static void Main(string[] args)
        {
            Menu();
        }

        public static void Menu(){
            Console.Clear();
            Console.WriteLine("Bem Vindo ao Campeonato Anual Lambda3");
            Console.WriteLine();
            Console.WriteLine("Para jogar, selecione 8 jogadores da lista abaixo.");
            Console.WriteLine();
            Console.WriteLine("Lista de opções: ");
            Console.WriteLine("--------------------------------------");
            Console.WriteLine();
            Console.WriteLine("Cod: 1 - The Legend of Zelda: Ocarina of Time (N64) - [Nota: 99.9 - Ano: 1998]");
            Console.WriteLine("Cod: 2 - Tony Hawk's Pro Skater 2 (PS) - [Nota: 98.9 - Ano: 2000]");
            Console.WriteLine("Cod: 3 - Grand Theft Auto IV (PS3) - [Nota: 98.9 - Ano: 2008]");
            Console.WriteLine("Cod: 4 - SoulCalibur (DC) - [Nota: 98.9 - Ano: 1999]");
            Console.WriteLine("Cod: 5 - Super Mario Galaxy (WII) - [Nota: 97.9 - Ano: 2017]");
            Console.WriteLine("Cod: 6 - Super Mario Galaxy 2 (WII) - [Nota: 97.9 - Ano: 2010]");
            Console.WriteLine("Cod: 7 - Grand Theft Auto IV (X360) - [Nota: 98.9 - Ano: 2008] ");
            Console.WriteLine("Cod: 8 - Red Dead Redemption 2 (XONE) - [Nota: 97.9 - Ano: 2018]");
            Console.WriteLine("Cod: 9 - Grand Theft Auto V (XONE) - [Nota: 97.9 - Ano: 2014]");
            Console.WriteLine("Cod: 10 - The Legend of Zelda: Breath of the Wild (Switch) - [Nota: 97.8 - Ano: 2017]");
            Console.WriteLine("Cod: 11 - Perfect Dark (N64) - [Nota: 97.8 - Ano: 2000]");
            Console.WriteLine("Cod: 12 - Metroid Prime (GC - [Nota: 97.8 - Ano: 2002]");
            Console.WriteLine();
            Console.WriteLine("--------------------------------------");
            Console.WriteLine();

            //Adicionando os jogadores escolhidos dentro do Array;
            int game = 8;

            var lista = new List<jogadores>();

            for (int i = 0; i < game; i++){
                Console.Write($"Jogador {(i+1)}: ");
                if(!int.TryParse(ReadLine(), out var jogador)) return;
                lista.Add(new jogadores(jogador));
            }

            
            //Para confirmar que listou dentro da lista;
            Console.WriteLine();
            Console.WriteLine("Lista dos Jogos Selecionados:");
            Console.WriteLine("-----------------------------------");
            foreach (var item in lista) Console.WriteLine(item.Jogador);

            //Array com os valores de cada game;

            var valores = new List<valores>();
            
            valores.Add(new valores("1",98.9,1998));
            valores.Add(new valores("2",98.9,2000));
            valores.Add(new valores("3",98.9,2008));
            valores.Add(new valores("4",98.9,1999));
            valores.Add(new valores("5",97.9,2017));
            valores.Add(new valores("6",97.9,2010));
            valores.Add(new valores("7",98.9,2008));
            valores.Add(new valores("8",97.9,2018));
            valores.Add(new valores("9",97.9,2014));
            valores.Add(new valores("10",97.8,2017));
            valores.Add(new valores("11",97.8,2000));
            valores.Add(new valores("12",97.8,2002));

            Console.WriteLine();
            Console.WriteLine("Valores para competição");
            Console.WriteLine("-----------------------------------");
            foreach (var item in valores) Console.WriteLine($"Game{item.Gamer} - Nota: {item.Nota} - Ano: {item.Ano}");
            Console.WriteLine();
            
            //Começando as funções do campeonato

            //Vencedor rodada 01

        }

    }

    class jogadores
    {
        public int Jogador{get; set;}
        public jogadores(int jogador){
            this.Jogador = jogador;
        }

    }

    class valores{
        public string Gamer{get; set;}
        public double Nota{get; set;}
        public int Ano{get; set;}

        public valores(string gamer, double nota, int ano){
            this.Gamer = gamer;
            this.Nota = nota;
            this.Ano = ano;
        }
    }
}

