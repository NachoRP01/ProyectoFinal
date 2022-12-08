import { DocumentoModel } from "../Documeto/documento"

export interface RespuestaGProveedor {
  IdCorporativo: number,
  RefDepartamento: string,
  RefUsuario: string,
  Nombre: string,
  Apellidos: string,
  FechaNacimiento: string,
  Genero: string,
  PreFijo: number,
  Telefono: number,
  Email:string,
  Newsletter: boolean,
  Documento: DocumentoModel[],
  
  Perfil: {
    Fumador: boolean,
    Alergias: {
      TieneAlergias: boolean,
      ListaAlergias: Array<number>,
      Observaciones: string
    },
    OpcionesAlimentacion: Array<number>,
    OpcionesAlimentacionAvion: Array<number>,
    NecesidadesMovilidad: {
      TieneNecesidadesMovilidad: boolean,
      TiposNecesidadesMovilidad: Array<number>,
      Observaciones: string
    }
  },
  PreferenciasHotel: {
    RegimenPreferente: number,
    Imprescindibles: Array<number>,
    CheckIn: string,
    CadenasHotelesPreferentes: Array<number>,
    Observaciones: string
  },
  PreferenciasVuelo: {
    ClaseHabitual: string,
    PreferenciasAsiento: number,
    CompañiasAereasPreferentes: string,
    Observaciones: string
  },
  PreferenciasTren: {
    PreferenciasAsiento: number,
    SentidoMarcha: number,
    NumeroVagon: number,
    Observaciones: string
  },
  PreferenciasRentACar: {
    CategoriaVehiculo: string,
    CompañiaFrecuente: string,
    Observaciones: string
  }
}
