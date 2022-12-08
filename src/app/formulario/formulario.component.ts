import { Component, OnInit } from '@angular/core';
import { RespuestaGProveedor } from '../models/Proveedor/proveedor';
import { HostListener } from '@angular/core';
import { DocumentoModel } from '../models/Documeto/documento';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class FormularioComponent {

  @HostListener('window:beforeunload', ['$event'])

  FichaUsuarioFormGroup: FormGroup
  PerfilFormGroup: FormGroup
  PreferenciasFormGroup: FormGroup

  datos: any
  selectedValues: any;
  favoriteSeason: any
  fumador: string
  alergiaNombre: string
  observacionesAlergiasFumador: string
  generoObjeto: any;
  alergiasObjeto: any;
  nuevoProveedor: RespuestaGProveedor
  enumeradosObjeto: any;
  documentoNuevo: DocumentoModel = {
    Extranjero: false,
    TipoDocumento: 1,
    NumDocumento: "",
    PaisExpedicion: "",
    FechaExpedicion: "",
    FechaCaducidad: ""
  }
  listaCarga: any
  listadoOpciones: any;
  documentos: any;
  poblaciones: any
  enumeradosObjetoProvincias: any;
  constructor(private fb: FormBuilder) {

    //  var this.listaCarga this.datos.get('../../assets/misc/EjemploRespuestaCArgarUsuario.this.listaCarga')
    this.listaCarga = require('../../assets/misc/EjemploRespuestaCargarUsuario.json')
    this.enumeradosObjeto = this.listaCarga.DiccionariosEnumerados
    this.enumeradosObjetoProvincias = this.listaCarga.Provincias
    this.nuevoProveedor = {
      IdCorporativo: this.listaCarga.IdCorporativo,
      RefDepartamento: this.listaCarga.Departamento,
      RefUsuario: this.listaCarga.RefUsuario,
      Nombre: this.listaCarga.Nombre,
      Apellidos: this.listaCarga.Apellidos,
      FechaNacimiento: "",
      Genero: "",
      PreFijo: this.listaCarga.Prefijo,
      Telefono: this.listaCarga.Telefono,
      Email: this.listaCarga.Email,
      Newsletter: true,
      Documento: [],
      Perfil: {
        Fumador: false,
        Alergias: {
          TieneAlergias: false,
          ListaAlergias: [],
          Observaciones: ""
        },
        OpcionesAlimentacion: [
        ],
        OpcionesAlimentacionAvion: [
        ],
        NecesidadesMovilidad: {
          TieneNecesidadesMovilidad: true,
          TiposNecesidadesMovilidad: [
            0
          ],
          Observaciones: ""
        }
      },
      PreferenciasHotel: {
        RegimenPreferente: 3,
        Imprescindibles: [
        ],
        CheckIn: "",
        CadenasHotelesPreferentes: [],
        Observaciones: ""
      },
      PreferenciasVuelo: {
        ClaseHabitual: "",
        PreferenciasAsiento: 1,
        CompañiasAereasPreferentes: "",
        Observaciones: ""
      },
      PreferenciasTren: {
        PreferenciasAsiento: 1,
        SentidoMarcha: 0,
        NumeroVagon: 2,
        Observaciones: ""
      },
      PreferenciasRentACar: {
        CategoriaVehiculo: "",
        CompañiaFrecuente: "",
        Observaciones: ""
      }

    } as RespuestaGProveedor

  }

  ngOnInit(): void {
  }
  recopilarDatos() {
    console.log(this.nuevoProveedor)
  }
  comprobarOtros() {
    let encontrado = this.nuevoProveedor.Perfil.OpcionesAlimentacion.some(element => element == 36)
    return encontrado
  }
  obtenerEnumeradoValue(nombreTipo: string) {
    let encontrado = this.enumeradosObjeto.find((d: { NombreTipo: string; }) => d.NombreTipo == nombreTipo)
    this.listadoOpciones = encontrado.Opciones
    return encontrado.Opciones
  }

  obtenerObjeto(id: any) {
    let objeto = this.listadoOpciones.find((opcion: { Id: any; }) => id == opcion.Id);
    return objeto;
  }
  obtenerEmpresas(lista: any) {
    console.log(lista)
  }
  crearDocumento() {
    this.nuevoProveedor.Documento.push(this.documentoNuevo)
    this.documentoNuevo = {
      Extranjero: false,
      TipoDocumento: 1,
      NumDocumento: "",
      PaisExpedicion: "",
      FechaExpedicion: "",
      FechaCaducidad: ""
    }
  }
  eliminar(numeroDocumento: string) {
    let pos = this.nuevoProveedor.Documento.findIndex(d => d.NumDocumento == numeroDocumento)
    this.nuevoProveedor.Documento.splice(pos, 1)
    console.log(this.nuevoProveedor.Documento)
  }
  comprobarDatos() {
    if (this.nuevoProveedor.Documento.length != 0 && this.nuevoProveedor.Nombre != "" && this.nuevoProveedor.Apellidos != "" && this.nuevoProveedor.Email != "") {
      return true
    }
    return false
  }
  nombreExtranjero(esExtranjero: boolean) {
    if (esExtranjero == true) {
      return "Sí"
    }else{
      return "No"
    }
  }
}
