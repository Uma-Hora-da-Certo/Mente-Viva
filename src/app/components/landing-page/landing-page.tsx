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
                Cuidado profissional com você
              </Badge>

              <h1 className="mb-6 text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Transforme sua saúde mental com apoio especializado
              </h1>

              <p className="mb-8 text-pretty text-lg text-muted-foreground sm:text-xl">
                Oferecemos acompanhamento psicológico personalizado para ajudar
                você a viver com mais equilíbrio, clareza e bem-estar emocional.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="gap-2">
                  Começar Agora
                  <ArrowRight className="size-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Saiba Mais
                </Button>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">
                    Pacientes atendidos
                  </div>
                </div>
                <Separator orientation="vertical" className="h-12" />
                <div>
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">
                    Anos de experiência
                  </div>
                </div>
                <Separator orientation="vertical" className="h-12" />
                <div>
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">
                    Satisfação
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="relative aspect-square w-full max-w-lg">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/40" />
                <img
                  src="/peaceful-person-meditating-in-nature-mental-wellne.jpg"
                  alt="Bem-estar mental"
                  className="relative z-10 h-full w-full rounded-3xl object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <Badge className="mb-4" variant="secondary">
              Nossos Serviços
            </Badge>
            <h2 className="mb-4 text-balance text-3xl font-bold sm:text-4xl lg:text-5xl">
              Como podemos ajudar você
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
              Oferecemos uma variedade de serviços especializados para atender
              suas necessidades de saúde mental
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <Brain className="size-6 text-primary" />
                </div>
                <CardTitle>Terapia Individual</CardTitle>
                <CardDescription>
                  Sessões personalizadas focadas em suas necessidades
                  específicas e objetivos pessoais
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>Atendimento presencial ou online</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>Abordagem humanizada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>Horários flexíveis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="size-6 text-primary" />
                </div>
                <CardTitle>Terapia de Casal</CardTitle>
                <CardDescription>
                  Fortaleça seu relacionamento com comunicação efetiva e
                  resolução de conflitos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>Melhore a comunicação</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>Resolva conflitos de forma saudável</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>Fortaleça vínculos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <Heart className="size-6 text-primary" />
                </div>
                <CardTitle>Gestão de Ansiedade</CardTitle>
                <CardDescription>
                  Técnicas comprovadas para controlar a ansiedade e recuperar
                  sua paz interior
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>Técnicas de relaxamento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>Mindfulness e meditação</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>Estratégias práticas</span>
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
              <img
                src="/professional-psychologist-in-modern-office.jpg"
                alt="Sobre nós"
                className="h-full w-full rounded-2xl object-cover shadow-xl"
              />
            </div>

            <div className="flex flex-col justify-center">
              <Badge className="mb-4 w-fit" variant="secondary">
                Sobre Nós
              </Badge>
              <h2 className="mb-6 text-balance text-3xl font-bold sm:text-4xl lg:text-5xl">
                Cuidado profissional que transforma vidas
              </h2>
              <p className="mb-6 text-pretty text-lg text-muted-foreground">
                Na Mente Viva, acreditamos que todos merecem viver com saúde
                mental plena. Nossa equipe de psicólogos especializados está
                comprometida em oferecer um espaço seguro e acolhedor para sua
                jornada de autoconhecimento e crescimento.
              </p>
              <p className="mb-8 text-pretty text-lg text-muted-foreground">
                Com mais de 15 anos de experiência, utilizamos abordagens
                baseadas em evidências científicas, sempre respeitando a
                individualidade de cada pessoa.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <CheckCircle2 className="size-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">
                      Profissionais Qualificados
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Equipe com formação especializada e registro no CRP
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <CheckCircle2 className="size-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">
                      Atendimento Humanizado
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Acolhimento e respeito em cada sessão
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <CheckCircle2 className="size-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">
                      Resultados Comprovados
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      98% de satisfação dos nossos pacientes
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
