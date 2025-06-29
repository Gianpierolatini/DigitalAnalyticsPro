import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, PlayCircle, BarChart, BookOpenCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="p-6 bg-white min-h-screen">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">📊 Digital Analyst Pro</h1>
        <p className="text-muted-foreground text-lg">
          Domina Google Analytics 4 y Google Tag Manager con una experiencia práctica y progresiva.
        </p>
      </header>
      <Tabs defaultValue="ga4" className="mb-8">
        <TabsList>
          <TabsTrigger value="ga4">GA4</TabsTrigger>
          <TabsTrigger value="gtm">GTM</TabsTrigger>
          <TabsTrigger value="career">Portafolio</TabsTrigger>
          <TabsTrigger value="dashboard">Progreso</TabsTrigger>
        </TabsList>
        <TabsContent value="ga4">
          <ModuleCard
            title="Fundamentos de GA4"
            description="Aprende eventos, parámetros, mediciones y DebugView."
            progress={75}
            level="Intermedio"
          />
          <QuizCard module="GA4" topic="Fundamentos de GA4" />
          <ModuleCard
            title="Análisis Avanzado"
            description="Exploraciones, audiencias, integración con BigQuery."
            progress={40}
            level="Avanzado"
          />
          <SandboxCard />
        </TabsContent>
        <TabsContent value="gtm">
          <ModuleCard
            title="Configuración y etiquetas"
            description="Variables, activadores y etiquetas esenciales."
            progress={90}
            level="Básico"
          />
          <QuizCard module="GTM" topic="Etiquetas y Activadores" />
          <ModuleCard
            title="Eventos personalizados y e-commerce"
            description="Implementación de eventos complejos y seguimiento completo."
            progress={10}
            level="Avanzado"
          />
          <SandboxCard />
        </TabsContent>
        <TabsContent value="career">
          <Card className="mb-4">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">🎯 Proyecto Final</h2>
              <p className="mb-2">Implementa un plan completo de analítica en un sitio demo e intégralo en GA4 y GTM.</p>
              <Button variant="outline">Ver brief</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">📁 Construye tu portafolio</h2>
              <p className="mb-2">Incluye tus dashboards, implementaciones técnicas y casos de negocio.</p>
              <Button>Ver recomendaciones</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="dashboard">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-4">📈 Panel de Progreso</h2>
              <p className="mb-2">Visualiza tu avance global, módulos completos y rendimiento en quizzes.</p>
              <ul className="text-sm space-y-2">
                <li><BarChart className="inline w-4 h-4 mr-1" /> GA4: 57% completado</li>
                <li><BarChart className="inline w-4 h-4 mr-1" /> GTM: 52% completado</li>
                <li><BookOpenCheck className="inline w-4 h-4 mr-1" /> Quizzes aprobados: 3/5</li>
              </ul>
              <Button className="mt-4">Ver estadísticas completas</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function ModuleCard({ title, description, progress, level }: { title: string, description: string, progress: number, level: string }) {
  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <Badge>{level}</Badge>
        </div>
        <p className="text-sm text-muted-foreground mb-3">{description}</p>
        <Progress value={progress} className="mb-3" />
        <div className="flex gap-2">
          <Button size="sm" variant="outline">
            <PlayCircle className="w-4 h-4 mr-2" /> Empezar
          </Button>
          <Button size="sm" variant="ghost">
            <CheckCircle className="w-4 h-4 mr-2" /> Marcar como completo
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function QuizCard({ module, topic }: { module: string, topic: string }) {
  return (
    <Card className="mb-4 border-dashed border-2">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-md font-semibold">🧠 Quiz interactivo: {topic}</h3>
          <Badge variant="secondary">{module}</Badge>
        </div>
        <p className="text-sm text-muted-foreground mb-3">Evalúa tu comprensión con preguntas tipo entrevista técnica.</p>
        <Button size="sm" variant="outline">Hacer Quiz</Button>
      </CardContent>
    </Card>
  );
}

function SandboxCard() {
  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <h3 className="text-md font-semibold mb-2">🧪 Sandbox interactivo</h3>
        <p className="text-sm text-muted-foreground mb-3">
          Prueba implementaciones en un entorno seguro sin afectar sitios reales.
        </p>
        <Button variant="outline">Abrir sandbox</Button>
      </CardContent>
    </Card>
  );
}