<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ConcretoPageSeeder extends Seeder
{
    public function run()
    {
        DB::table('concreto_pages')->insert([
            'title_seo' => 'Título SEO por defecto',
            'description_seo' => 'Descripción SEO por defecto.',
            'image_seo' => 'seo/default.png',

            // Secciones
            'section_title_01' => 'Experiencia y compromiso<br/> <span className="font-milligrambold bg-[#2C9C47]">en <b className="font-milligrambold">cada proyecto</b></span>',
            'section_description_01' => 'Con más de <span className="font-sans">18</span> años de experiencia, en PAVESA hemos sido parte del desarrollo del país a través de proyectos de construcción de todo tipo, colaborando tanto con instituciones gubernamentales como con clientes privados. Hoy, fortalecemos nuestra oferta al incorporar la producción de concreto premezclado, reafirmando nuestro compromiso de ofrecer soluciones a la medida de cada proyecto. Respaldados por un equipo de más de <span className="font-sans">700</span> colaboradores, tecnología avanzada y la capacidad para atender proyectos de cualquier escala, estamos preparados para llevar tus ideas a la realidad con eficiencia y calidad.',
            'section_image_01' => 'concreto/camion-concreto-1.png',
            'section_title_02' => 'soluciones completas <br/>en concreto',

            // Soluciones
            'solution_image_01' => 'concreto/solucion-concreto-1.png',
            'solution_title_01' => 'Suministro de concreto premezclado',
            'solution_description_01' => '<ul className="text-[#11312C] list-disc list-inside leading-10"> <li>Variedad y personalización de diseños.</li> <li>Servicios de bombeo.</li> </ul>',
            'solution_image_02' => '/concreto/solucion-concreto-2.png',
            'solution_title_02' => 'Transporte en mixers y bombeo especializado',
            'solution_description_02' => '<ul className="text-[#11312C] list-disc list-inside leading-10"> <li>Equipos modernos y eficientes.</li> <li>Opción de envío en camión de <span className="font-sans">10m³.</span></li> <li>Envíos en todo el país y flexibilidad de horario.</li> </ul>',
            'solution_image_03' => 'concreto/solucion-concreto-3.png',
            'solution_title_03' => 'Calidad<br/>&nbsp;',
            'solution_description_03' => '<p className="text-[#11312C]">Garantizamos la calidad del concreto con el respaldo de laboratorios certificados cumpliendo con normativas ASTM y ACI.</p>',
            'solution_image_04' => 'concreto/solucion-concreto-4.png',
            'solution_title_04' => 'Asesoramiento <br/>técnico',
            'solution_description_04' => '<p className="text-[#11312C]">Visitas técnicas a obra y recomendaciones según el proyecto.</p>',

            // Más secciones
            'section_title_03' => 'Capacidades <br/>operativas',
            'section_image_03' => 'concreto/capacidades-operativas-l.png',
            'section_title_04' => 'Capacidades <br/>operativas',
            'section_subtitle_04' => 'Concreto que <br/>cumple con los <br/><span className="bg-[#2C9C47] px-2 text-white font-milligrambold">más altos estándares</span>',
            'section_description_04' => '<ul className="text-[#11312C] lg:text-xl sm:text-lg text-md list-disc list-inside leading-10"> <li>Pruebas de revenimiento, resistencia, y uniformidad.</li> <li>Control de calidad bajo normativas ASTM y ACI.</li> <li>Ensayos realizados con laboratorios acreditados y resultados transparentes.</li> </ul>',
            'section_image_04' => 'concreto/control-calidad.png',
            'section_title_05' => 'TIPOS DE CONCRETO',
            'section_subtitle_05' => 'CONCRETO <br/>CONVENCIONAL',
            'section_description_05' => '<p className="text-[#11312C] text-xl">Diseñado para estructuras de medianas y grandes dimensiones, ideal para colados masivos y climas cálidos donde la temperatura influye en sus propiedades, en estado fresco y endurecido.</p>',
            'section_image_05' => 'concreto/tipos-concreto.png',
            'section_title_06' => 'VENTAJAS',

            // Ventajas
            'advantage_01' => 'Disminución de fisuras en la estructura',
            'advantage_02' => 'Mejora la manejabilidad del concreto en obra',
            'advantage_03' => 'Estabiliza la temperatura del elemento',
            'advantage_04' => 'Incrementa la durabilidad del elemento',
            'advantage_05' => 'Optimiza las propiedades en estado fresco y endurecido',

            // Imágenes adicionales
            'section_image_06' => 'concreto/informacion-concreto.png',
            'section_image_07' => 'concreto/info-concreto-2.png',
        ]);
    }
}