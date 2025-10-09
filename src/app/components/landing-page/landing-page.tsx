import Image from "next/image";

import {
  Brain,
  Heart,
  Users,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Gamepad2,
  Palette,
  MessageSquare,
  Puzzle,
  Grid3x3,
} from "lucide-react";
import { Footer } from "../footer";
import { LPHeader } from "./header";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <LPHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-accent/30 to-background py-20 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <Badge className="mb-6 w-fit" variant="secondary">
                <Sparkles className="mr-1 size-3" />
                Jogos para a terceira idade
              </Badge>

              <h1 className="mb-6 text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Estimule a mente com jogos divertidos e acessíveis
              </h1>

              <p className="mb-8 text-pretty text-lg text-muted-foreground sm:text-xl">
                Plataforma digital com jogos interativos especialmente
                desenvolvidos para idosos, promovendo estímulo cognitivo,
                entretenimento e bem-estar de forma simples e divertida.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="gap-2">
                  Experimentar Jogos
                  <ArrowRight className="size-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Saiba Mais
                </Button>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary">5</div>
                  <div className="text-sm text-muted-foreground">
                    Jogos disponíveis
                  </div>
                </div>
                <Separator orientation="vertical" className="h-12" />
                <div>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Gratuito</div>
                </div>
                <Separator orientation="vertical" className="h-12" />
                <div>
                  <div className="text-3xl font-bold text-primary">Fácil</div>
                  <div className="text-sm text-muted-foreground">
                    Todas as idades
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="relative aspect-square w-full max-w-lg">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/40" />
                <Image
                  width={512}
                  height={512}
                  src="/images/foto-hero.jpg"
                  alt="Idosos jogando e se divertindo"
                  className="relative z-10 h-full w-full rounded-3xl object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <Badge className="mb-4" variant="secondary">
              Benefícios
            </Badge>
            <h2 className="mb-4 text-balance text-3xl font-bold sm:text-4xl lg:text-5xl">
              Por que jogar faz bem para a mente
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
              Nossos jogos foram desenvolvidos para proporcionar estímulo
              cognitivo e bem-estar emocional
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <Brain className="size-6 text-primary" />
                </div>
                <CardTitle>Estimulação Cognitiva</CardTitle>
                <CardDescription>
                  Exercite memória, atenção e raciocínio de forma natural e
                  divertida
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>Melhora da memória</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>Aumento da concentração</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>Raciocínio mais ágil</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="size-6 text-primary" />
                </div>
                <CardTitle>Socialização</CardTitle>
                <CardDescription>
                  Compartilhe momentos divertidos e crie conexões através dos
                  jogos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>Interação social</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>Redução do isolamento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>Momentos de alegria</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <Heart className="size-6 text-primary" />
                </div>
                <CardTitle>Bem-Estar Emocional</CardTitle>
                <CardDescription>
                  Promova autoestima, relaxamento e qualidade de vida através do
                  entretenimento
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>Redução do estresse</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>Aumento da autoestima</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>Sensação de realização</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="jogos" className="border-y bg-muted/30 py-20 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <Badge className="mb-4" variant="secondary">
              <Gamepad2 className="mr-1 size-3" />
              Jogos Interativos
            </Badge>
            <h2 className="mb-4 text-balance text-3xl font-bold sm:text-4xl lg:text-5xl">
              Estimule a mente de forma divertida
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
              Plataforma digital com jogos adaptados para idosos, promovendo
              estímulo cognitivo, entretenimento e bem-estar emocional
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <Grid3x3 className="size-6 text-primary" />
                </div>
                <CardTitle>Jogo da Memória</CardTitle>
                <CardDescription>
                  Encontre pares de cartas iguais e exercite sua memória visual
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="mb-3 text-sm font-medium">Benefícios:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>Memória visual</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>Concentração</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>Paciência</span>
                    </li>
                  </ul>
                </div>
                <Badge variant="outline" className="text-xs">
                  Dificuldade ajustável
                </Badge>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <MessageSquare className="size-6 text-primary" />
                </div>
                <CardTitle>Caça-Palavras</CardTitle>
                <CardDescription>
                  Encontre palavras ocultas em uma grade de letras com temas
                  nostálgicos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="mb-3 text-sm font-medium">Benefícios:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>Atenção e foco</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>Vocabulário</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>Memória</span>
                    </li>
                  </ul>
                </div>
                <Badge variant="outline" className="text-xs">
                  Temas nostálgicos
                </Badge>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <Palette className="size-6 text-primary" />
                </div>
                <CardTitle>Pintura Digital</CardTitle>
                <CardDescription>
                  Selecione cores e preencha desenhos de forma criativa e
                  relaxante
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="mb-3 text-sm font-medium">Benefícios:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>Coordenação motora</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>Criatividade</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>Relaxamento</span>
                    </li>
                  </ul>
                </div>
                <Badge variant="outline" className="text-xs">
                  Interface acessível
                </Badge>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <Brain className="size-6 text-primary" />
                </div>
                <CardTitle>Quiz Cultural</CardTitle>
                <CardDescription>
                  Perguntas e respostas sobre cultura dos anos 50-70, novelas e
                  culinária
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="mb-3 text-sm font-medium">Benefícios:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>Memória de longo prazo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>Autoestima</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>Atenção</span>
                    </li>
                  </ul>
                </div>
                <Badge variant="outline" className="text-xs">
                  Múltiplas alternativas
                </Badge>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <Puzzle className="size-6 text-primary" />
                </div>
                <CardTitle>Quebra-Cabeça</CardTitle>
                <CardDescription>
                  Monte imagens arrastando peças e exercite o raciocínio
                  espacial
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="mb-3 text-sm font-medium">Benefícios:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>Percepção visual</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>Raciocínio espacial</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>Paciência</span>
                    </li>
                  </ul>
                </div>
                <Badge variant="outline" className="text-xs">
                  Peças grandes
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 bg-primary/5 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <Sparkles className="size-6 text-primary" />
                </div>
                <CardTitle>Plataforma Completa</CardTitle>
                <CardDescription>
                  Sistema acessível e intuitivo adaptado às necessidades da
                  terceira idade
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>Interface simplificada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>Botões grandes e visíveis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>Cores vivas e contrastantes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>Adaptado para asilos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="gap-2">
              Experimentar Jogos
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="border-y bg-muted/30 py-20 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative">
              <Image
                width={500}
                height={300}
                src="/images/idosa-celular.jpg"
                alt="Idosos se divertindo com jogos"
                className="h-full w-full rounded-2xl object-cover shadow-xl"
              />
            </div>

            <div className="flex flex-col justify-center">
              <Badge className="mb-4 w-fit" variant="secondary">
                Sobre Nós
              </Badge>
              <h2 className="mb-6 text-balance text-3xl font-bold sm:text-4xl lg:text-5xl">
                Tecnologia a serviço da terceira idade
              </h2>
              <p className="mb-6 text-pretty text-lg text-muted-foreground">
                O Mente Viva é uma plataforma digital desenvolvida especialmente
                para idosos em asilos e casas de repouso. Nosso objetivo é
                proporcionar entretenimento de qualidade e estímulo cognitivo
                através de jogos acessíveis e divertidos.
              </p>
              <p className="mb-8 text-pretty text-lg text-muted-foreground">
                Acreditamos que a tecnologia pode melhorar a qualidade de vida
                da terceira idade, oferecendo atividades que exercitam a mente,
                promovem socialização e trazem alegria ao dia a dia.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <CheckCircle2 className="size-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Interface Acessível</h3>
                    <p className="text-sm text-muted-foreground">
                      Botões grandes, cores contrastantes e navegação
                      simplificada
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <CheckCircle2 className="size-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Conteúdo Nostálgico</h3>
                    <p className="text-sm text-muted-foreground">
                      Temas e referências culturais familiares à terceira idade
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <CheckCircle2 className="size-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Totalmente Gratuito</h3>
                    <p className="text-sm text-muted-foreground">
                      Acesso livre a todos os jogos e funcionalidades
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden border-0 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-2xl">
            <CardContent className="p-8 sm:p-12 lg:p-16">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="mb-4 text-balance text-3xl font-bold sm:text-4xl lg:text-5xl">
                  Pronto para começar sua jogatina?
                </h2>
                <p className="mb-8 text-pretty text-lg opacity-90 sm:text-xl">
                  Comece agora e descubra como os jogos podem trazer mais
                  diversão, memória afiada e bem-estar ao seu dia a dia!
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Button size="lg" variant="secondary" className="gap-2">
                    Jogar agora
                    <ArrowRight className="size-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                  >
                    FAQ
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
