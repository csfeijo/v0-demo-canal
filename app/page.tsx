import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Mail, Github, Linkedin, Youtube, FileText, Bookmark, GraduationCap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { SmoothScrollLink } from "@/components/smooth-scroll-link"
import { AnimatedSection } from "@/components/animated-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold">Portfólio</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <SmoothScrollLink
                href="#about"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Sobre
              </SmoothScrollLink>
              <SmoothScrollLink
                href="#videos"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Vídeos
              </SmoothScrollLink>
              <SmoothScrollLink
                href="#articles"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Artigos
              </SmoothScrollLink>
              <SmoothScrollLink
                href="#trainings"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Treinamentos
              </SmoothScrollLink>
              <SmoothScrollLink
                href="#contact"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Contato
              </SmoothScrollLink>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="about" className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-background/80">
          <div className="container">
            <AnimatedSection className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Olá, eu sou <span className="text-emerald-400">Cícero Feijó</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Sou um profissional especializado em Desenvolvimento Front-end. Crio vídeos, escrevo artigos e ofereço treinamentos
                    para ajudar outras pessoas a aprender e crescer.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <SmoothScrollLink href="#contact">Fale Comigo</SmoothScrollLink>
                  </Button>
                  <Button variant="outline" asChild>
                    <SmoothScrollLink href="#videos">Ver Meu Trabalho</SmoothScrollLink>
                  </Button>
                </div>
                <div className="flex gap-4 pt-4">
                  <Badge variant="outline" className="px-3 py-1">
                    Desenvolvimento Web
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    Design
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    Criação de Conteúdo
                  </Badge>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Avatar className="h-80 w-80">
                  <AvatarImage src="https://avatars.githubusercontent.com/u/25899?v=4" alt="Perfil" />
                  <AvatarFallback>CF</AvatarFallback>
                </Avatar>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Content Tabs */}
        <section className="container py-12 md:py-24 lg:py-32 bg-background border-y">
          <AnimatedSection delay={0.2}>
            <Tabs defaultValue="videos" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="videos" id="videos">
                    Vídeos
                  </TabsTrigger>
                  <TabsTrigger value="articles" id="articles">
                    Artigos
                  </TabsTrigger>
                  <TabsTrigger value="trainings" id="trainings">
                    Treinamentos
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Videos Tab */}
              <TabsContent value="videos" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold tracking-tighter">Meus Vídeos</h2>
                  <p className="text-muted-foreground md:text-lg mt-2">Confira meus conteúdos em vídeo mais recentes</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3].map((i) => (
                    <AnimatedSection key={i} delay={0.1 * i}>
                      <Card className="overflow-hidden">
                        <div className="aspect-video relative">
                          <Image
                            src={`/placeholder.svg?height=200&width=350&text=Vídeo+${i}`}
                            alt={`Vídeo ${i}`}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Button
                              size="icon"
                              variant="secondary"
                              className="rounded-full bg-background/80 backdrop-blur-sm"
                            >
                              <Youtube className="h-8 w-8" />
                            </Button>
                          </div>
                        </div>
                        <CardHeader>
                          <CardTitle>Título do Vídeo {i}</CardTitle>
                          <CardDescription>Breve descrição sobre este vídeo</CardDescription>
                        </CardHeader>
                        <CardFooter>
                          <Button variant="outline" size="sm" className="w-full" asChild>
                            <Link href="#" target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Assistir Vídeo
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </AnimatedSection>
                  ))}
                </div>
                <div className="flex justify-center mt-8">
                  <Button variant="outline" asChild>
                    <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                      Ver Todos os Vídeos
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </TabsContent>

              {/* Articles Tab */}
              <TabsContent value="articles" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold tracking-tighter">Meus Artigos</h2>
                  <p className="text-muted-foreground md:text-lg mt-2">Leia meus artigos e publicações mais recentes</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3].map((i) => (
                    <AnimatedSection key={i} delay={0.1 * i}>
                      <Card>
                        <CardHeader>
                          <CardTitle>Título do Artigo {i}</CardTitle>
                          <CardDescription>Publicado em {i} de Janeiro de 2023</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="line-clamp-3">
                            Este é um breve trecho do artigo que dá aos leitores uma ideia do conteúdo. O artigo aborda
                            tópicos importantes relacionados à minha área de especialização.
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" size="sm" className="w-full" asChild>
                            <Link href="#" target="_blank" rel="noopener noreferrer">
                              <FileText className="mr-2 h-4 w-4" />
                              Ler Artigo
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </AnimatedSection>
                  ))}
                </div>
                <div className="flex justify-center mt-8">
                  <Button variant="outline" asChild>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      Ver Todos os Artigos
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </TabsContent>

              {/* Trainings Tab */}
              <TabsContent value="trainings" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold tracking-tighter">Meus Treinamentos</h2>
                  <p className="text-muted-foreground md:text-lg mt-2">
                    Explore meus programas de treinamento e cursos
                  </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3].map((i) => (
                    <AnimatedSection key={i} delay={0.1 * i}>
                      <Card>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle>Curso de Treinamento {i}</CardTitle>
                            <Badge>{i === 1 ? "Novo" : i === 2 ? "Popular" : "Avançado"}</Badge>
                          </div>
                          <CardDescription>Um programa de treinamento completo</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center">
                              <GraduationCap className="mr-2 h-4 w-4 text-emerald-400" />
                              <span>10 módulos de conteúdo aprofundado</span>
                            </li>
                            <li className="flex items-center">
                              <FileText className="mr-2 h-4 w-4 text-emerald-400" />
                              <span>Recursos para download</span>
                            </li>
                            <li className="flex items-center">
                              <Bookmark className="mr-2 h-4 w-4 text-emerald-400" />
                              <span>Certificado após conclusão</span>
                            </li>
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button size="sm" className="w-full" asChild>
                            <Link href="#" target="_blank" rel="noopener noreferrer">
                              Saiba Mais
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </AnimatedSection>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </AnimatedSection>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24 lg:py-32 bg-muted/10">
          <div className="container">
            <AnimatedSection delay={0.3} className="mx-auto max-w-xl space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Entre em Contato</h2>
                <p className="mt-4 text-muted-foreground md:text-lg">
                  Tem uma pergunta ou quer trabalhar junto? Sinta-se à vontade para entrar em contato!
                </p>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Informações de Contato</CardTitle>
                  <CardDescription>Aqui estão as formas de me contatar</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="mr-3 h-5 w-5 text-emerald-400" />
                    <a href="mailto:seu.email@exemplo.com" className="hover:underline">
                      seu.email@exemplo.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="mr-3 h-5 w-5 text-emerald-400" />
                    <a
                      href="https://linkedin.com/in/seuperfil"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      linkedin.com/in/seuperfil
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Github className="mr-3 h-5 w-5 text-emerald-400" />
                    <a
                      href="https://github.com/seunome"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      github.com/seunome
                    </a>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="mailto:seu.email@exemplo.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Enviar Email
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
