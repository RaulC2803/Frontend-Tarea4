import { Usuario } from './usuario';
import { BodegaCategoria } from './bodega-categoria';
import { BodegaProducto } from './bodega-producto';
import { Reseña } from './reseña';

export class Bodega extends Usuario{
    codigo: number;
    ruc: string;
    nombre: string;
    direccion: string;
    aforo: number;
    agencia_bancaria: String;
    bodega_categoria: BodegaCategoria[];
    productos: BodegaProducto[];
    reseña: Reseña[];
}
