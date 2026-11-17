
import { UserX, ClipboardCheck, FileWarning, Trophy, MailWarning, LogIn, LogOut, BookOpenCheck, Snowflake, AlertCircle, FileText, BookOpen, CalendarX } from "lucide-react-native";

export const alumno = {
  nombre: "Griselda Concepción Espino Martínez",
  grupo: "2A",
};

export const indicadores = [
  {
    id: 1,
    titulo: "Inasistencias",
    valor: 3,
    color: "#F04416",
    icono: Snowflake,
  },
  {
    id: 2,
    titulo: "Tareas hoy",
    valor: 2,
    color: "#3975D7",
    icono: ClipboardCheck,
  },
  {
    id: 3,
    titulo: "Reportes",
    valor: 0,
    color: "#DF3942",
    icono: FileWarning,
  },
  {
    id: 4,
    titulo: "Premios",
    valor: 3,
    color: "#269B38",
    icono: Trophy,
  },
  {
    id: 5,
    titulo: "Citatorios",
    valor: 1,
    color: "#BDA99D",
    icono: MailWarning,
  },
];

export const avisos = [
  {
    id: 1,
    mensaje:
      "Por cuestiones de administración, el día 16 de noviembre se suspenden clases. Regresamos el martes 17 de noviembre.",
  },
  {
    id: 2,
    mensaje:
      "Recordatorio: próximamente se realizará la junta de padres de familia.",
  },
  {
    id: 3,
    mensaje:
      "No olvides revisar las tareas y actividades pendientes de esta semana.",
  },
];

const fechaHace = (dias) => {
  const fecha = new Date();
  fecha.setDate(fecha.getDate() - dias);

  const anio = fecha.getFullYear();
  const mes = String(fecha.getMonth() + 1).padStart(2, "0");
  const dia = String(fecha.getDate()).padStart(2, "0");

  return `${anio}-${mes}-${dia}`;
};

export const actividades = [
  {
    id: 1,
    titulo: "Entrada",
    hora: "07:01",
    fecha: fechaHace(0),
    icono: LogIn,
    color: "#22A06B",
  },
  {
    id: 2,
    titulo: "Reporte",
    hora: "09:30",
    fecha: fechaHace(0),
    icono: AlertCircle,
    color: "#E45858",
  },
  {
    id: 3,
    titulo: "Citatorio",
    hora: "10:15",
    fecha: fechaHace(1),
    icono: FileText,
    color: "#E59A32",
  },
  {
    id: 4,
    titulo: "Tarea",
    hora: "11:20",
    fecha: fechaHace(2),
    icono: BookOpen,
    color: "#3978D6",
  },
  {
    id: 5,
    titulo: "Inasistencia",
    hora: "08:00",
    fecha: fechaHace(5),
    icono: CalendarX,
    color: "#D94C4C",
  },
  {
    id: 6,
    titulo: "Salida",
    hora: "13:05",
    fecha: fechaHace(8),
    icono: LogOut,
    color: "#22A06B",
  },
];
