import logo from './logo.svg';
import './App.css';
import actaConciliacion from './files/actaConciliacion.pdf';
import auto001105 from './files/auto001105.pdf';
import auto63000776 from './files/auto63000776.pdf';
import auto630000985 from './files/auto630000985.pdf';
import auto630001255 from './files/auto630001255.pdf';
import determinacionAcreencias from './files/determinacionAcreencias.pdf';
import planDeNegocios from './files/planDeNegocios.pdf';
import proyectoDeAcuerdo from './files/proyectoDeAcuerdo.pdf';

function App() {
  return (
    <div className="App">
      <h1>
        PROCESO DE REORGANIZACIÓN ABREVIADA PERSONA JURÍDICA SERIEMAX S.A.S.
        <br></br>
        NIT 900.269.684-8
      </h1>
      <br></br>
      <h2>ANTECEDENTES</h2>
      <br></br>
      <ol>
        <li>
          A través del auto 630-00776 del 24 de Junio de 2020 se admitió
          un proceso de reorganización abreviada a la sociedad SERIEMAX S.A.S.
          bajo los lineamientos del Decreto 772 de 2020 en armonía con los parámetros
          de la ley 1116 de 2016.
        </li>
        <br></br>
        <li>
          A través del auto 630-000985 del 20 de Agosto de 2020 se citó a la reunión de
          conciliación de objeciones establecida en el artículo 11 del decreto legislativo
          772 de 2020 para el día 14 de septiembre de 2020.
        </li>
        <br></br>
        <li>
          A través del auto 630-001105 del 17 de septiembre de 2020 se informa que la
          continuación de la reunión de conciliación de objeciones fue fijada para el
          día 21 de septiembre de 2020 a las 3:00 pm.
        </li>
        <br></br>
        <li>
          Mediante el auto 630-001255 del día 6 de noviembre de 2020 se convocó a la audiencia
          de resolución de objeciones y confirmación del acuerdo regulado por el parágrafo 2 del
          Art. 11 del Decreto 772 de 2020 para el día 2 de diciembre de 2020 a las 9:00 am.
        </li>
        <br></br>
        <li>
          Mediante radicado 2020-01-611738 del día 26 de noviembre de 2020 el promotor presentó el
          acuerdo de reorganización, el plan de negocios, el flujo de caja y los votos afirmativos
          obtenidos a la fecha de radicación.
        </li>
        <br></br>
        <li>
          Mediante providencia dictada en audiencia de fecha 2 de diciembre de 2020 se cierran las
          objeciones presentadas y se aprueba el proyecto de calificación y graduación de créditos y
          la determinación de derechos de voto.
        </li>
        <br></br>
        <li>
          Se allegaron votos adicionales durante la audiencia del 2 de diciembre de 2020.
        </li>
        <br></br>
        <li>
          La totalidad de los votos allegados por el promotor son representativos del 60,07% del total
          de votos admisibles que fueron remitidos por acreedores pertenecientes a primera, cuarta y
          quinta categoría.
        </li>
        <br></br>
        <li>
          Se hicieron observaciones al texto del acuerdo por el juez de concurso que fueron atendidos
          por el deudor.
        </li>
      </ol>
      <div className = 'links'>
        <h2>Documentos soporte:</h2>
        <a href = {actaConciliacion} target = '_blank'>Acta de conciliación</a>
        <br></br>
        <a href = {auto001105} target = '_blank'>Citación continuación reunión de conciliación</a>
        <br></br>
        <a href = {auto63000776} target = '_blank'>Admisión proceso de reorganización</a>
        <br></br>
        <a href = {auto630000985} target = '_blank'>Citación reunión de conciliación</a>
        <br></br>
        <a href = {auto630001255} target = '_blank'>Convocatoria audiencia resolución de objeciones y confirmación del acuerdo</a>
        <br></br>
        <a href = {determinacionAcreencias} target = '_blank'>Determinación de acreencias y derechos de voto</a>
        <br></br>
        <a href = {planDeNegocios} target = '_blank'>Plan de negocios</a>
        <br></br>
        <a href = {proyectoDeAcuerdo} target = '_blank'>Proyecto de acuerdo</a>
        <br></br>
      </div>
      <div className = 'contact'>
        <h2>Contacto:</h2>
        <p><span>Promotor:</span> Ramiro Herrera Estrada</p>
        <p><span>Dirección:</span> Carrera 6 # 90 - 52</p>
        <p><span>Teléfono:</span> 3114033324</p>
        <p>Barranquilla, Colombia.</p>
      </div>
    </div>
  );
}

export default App;
