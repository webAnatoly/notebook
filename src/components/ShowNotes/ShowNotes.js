import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import css from './ShowNotes.css';
import Note from '../Note/Note';
import Editor from '../../containers/Editor/Editor';

const ShowNotes = ({ isFullNote, showFullNote, editing }) => {
  /*
  [TO DO] генерить в переменную result маленькие превью заметок на основе JSON
  файла полученного с сервера.
  */
  let result = (
    <Note
      showFullNote={showFullNote}
      customizeStyles={css.Node_Small}
      title="Название заметки"
    >
      Текст заметки. Пока что развернуть заметку можно двойным кликом.
    </Note>
  );

  // если передан флаг isFullNote значит рендерим одну большую заметку
  if (isFullNote) {
    result = (
      <Note
        isFullNote
        customizeStyles={css.FullNote}
        title="Название заметки"
      >
        Very big enty.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iste voluptates maxime suscipit, harum officiis possimus officia inventore et animi fugit dolor cupiditate magnam, quae atque veritatis non accusamus cum quos laboriosam quibusdam eum. Voluptates quae qui illo sit tenetur impedit, voluptas error aliquid dolor porro? Quis, similique sit eaque aperiam, neque esse obcaecati tempora quam sed, vitae quos eius molestias sapiente vel dignissimos! Totam saepe, veniam vitae, mollitia maiores perspiciatis ipsa alias fuga adipisci iusto odit provident accusamus eum labore ut atque perferendis minima, quis id sunt at? Neque sit sunt dolores quia placeat debitis deleniti sapiente quae molestias alias corporis beatae accusamus, quibusdam quod esse natus consequuntur labore, explicabo rerum nostrum fuga unde. Veritatis quisquam maiores animi voluptate placeat voluptates aut assumenda molestias aliquam, soluta accusantium vero, voluptatum exercitationem eum repellendus laudantium quia alias laborum magni error eveniet harum debitis? Unde sint vitae porro itaque quidem saepe similique molestiae totam enim labore libero natus, autem non, iure veniam distinctio eum recusandae sapiente repudiandae quasi corrupti. Velit placeat dolore mollitia quibusdam quasi aut iste sit nihil, neque rem assumenda quis earum. Doloremque rem laborum dicta velit hic quas atque soluta, veniam in aspernatur. Ipsam eveniet, fugit quaerat tempore ipsa itaque atque nemo modi? Est, sint commodi voluptatum dolores harum minima omnis earum recusandae saepe asperiores ratione, quia sit reiciendis tempore suscipit beatae voluptates. In molestias doloremque exercitationem, non commodi repudiandae perspiciatis necessitatibus dolorem dignissimos enim voluptate optio magni ullam voluptatum soluta molestiae. Distinctio voluptatibus, ab sint consequatur corporis nesciunt aliquam magni itaque officia consectetur deleniti. Tenetur aspernatur illum doloribus earum autem neque facilis dolorem modi fuga quam, voluptate quis deleniti quasi obcaecati, rerum similique ea optio voluptatibus explicabo rem repellat ab impedit. Animi alias esse quos. Quidem, esse nostrum commodi doloremque accusantium error quam mollitia totam eum porro, repudiandae consectetur quisquam molestiae ab consequuntur soluta eius rem et facere iste, id temporibus corporis! Nesciunt consectetur impedit architecto ex ratione vero cum laboriosam, praesentium dolorem, sunt, fuga doloribus sit eos obcaecati deserunt eveniet dolore libero deleniti. Beatae, accusamus. Nihil fugit maxime error dolorem incidunt, distinctio facilis eos numquam culpa neque tenetur corrupti, sed magni possimus in veritatis omnis cupiditate itaque. Harum quo quae, impedit provident cumque repellat officia sapiente ipsum debitis dolorum dolores quidem odit corrupti nam, praesentium facere possimus ut quisquam totam placeat quas quia velit animi reprehenderit! Quisquam ab consectetur mollitia quibusdam repellat libero debitis nesciunt quia nostrum nam necessitatibus eveniet commodi possimus illo ex iste aliquid ipsam, quam id placeat quaerat minus atque. Necessitatibus vero nulla velit quod pariatur accusantium assumenda veniam doloremque dolorum, numquam labore rem, similique veritatis corrupti iure, dolor repellat. Hic est sapiente natus praesentium esse itaque suscipit dicta perspiciatis ipsum earum repellat consectetur sit maiores nemo tenetur odio at unde, laudantium ducimus quos doloribus. Debitis similique, repellat perspiciatis molestias dolorum aliquid rem qui maiores reiciendis quisquam eligendi excepturi voluptates dolor quasi, blanditiis aperiam? Quia ea dolorum necessitatibus cupiditate suscipit ducimus aliquid quisquam modi laborum dolorem voluptatem soluta fugit eligendi aliquam iusto, maxime tenetur, officia at. Totam mollitia, libero aperiam similique dignissimos fugit exercitationem vitae odio, quod obcaecati recusandae suscipit nam. Omnis iure ex, corrupti cumque, repudiandae odio eius nobis laborum error quod unde, architecto quidem est doloribus veritatis saepe incidunt facilis ipsum debitis? Odio quas aliquid sapiente nemo sit rerum accusantium sed porro voluptas quis illo nostrum et consequuntur iure repudiandae quae distinctio, deleniti pariatur placeat fugiat tempore vitae exercitationem omnis at. Doloribus veniam esse dolores corrupti! Ducimus tenetur eveniet omnis, voluptates accusantium possimus cum soluta dolorum similique illum iste odio quod corrupti maiores explicabo quisquam cupiditate nam natus iusto aliquid ipsam quam, temporibus iure. Natus ad cum possimus delectus explicabo dicta dolorum, officia numquam at. Asperiores consequatur nobis accusantium tenetur id quo cum dolor tempora dicta enim incidunt vero eligendi voluptatibus dignissimos error maiores ipsam, pariatur esse deserunt odio! Corrupti porro eos, ipsam ut a debitis explicabo totam distinctio facere nesciunt? Unde libero similique, nam repellat voluptatibus odit. Velit cum voluptate accusantium eaque ducimus repellendus iure omnis ad vel quasi doloribus id incidunt quia molestiae architecto, quam nobis. Eaque, iusto dolor. Officia tempora vitae, unde necessitatibus laboriosam tempore provident quae maiores nesciunt iusto. Nihil accusantium veritatis, facere laudantium eaque officiis ipsam rem quis asperiores ab, voluptatibus nesciunt aliquid veniam, doloribus quas saepe. Distinctio, sit facilis ipsam repellat harum adipisci repudiandae aliquid! Deleniti quo libero asperiores impedit dolore inventore vero, fugit incidunt laboriosam illo placeat! Dicta, quam. Deleniti magnam vitae aut soluta placeat asperiores, quam, quaerat nulla quae eaque at doloribus libero. Sint modi earum cumque saepe asperiores facilis, fugit ad atque maiores exercitationem? Fuga suscipit eos laboriosam quos quis? Nobis modi nostrum quia dolorum perferendis voluptates, cum laboriosam eveniet corrupti libero iste voluptatibus asperiores? Voluptatem impedit minima architecto quasi fugiat. Voluptatem, quis explicabo aliquid saepe repudiandae quia, laudantium possimus placeat omnis dicta recusandae distinctio. Reiciendis, veritatis! Architecto iusto quo, aliquid libero saepe laboriosam minima, eveniet pariatur recusandae vero alias distinctio tempore officiis debitis illo ullam eos necessitatibus. Beatae voluptatem voluptates maiores accusantium modi reiciendis, officia illum pariatur atque! Eveniet, quae aliquid corporis ratione dolorum fugit vero minus libero cupiditate sunt aliquam molestias reprehenderit asperiores id perspiciatis qui provident architecto suscipit fugiat quas odit deserunt. Quas repudiandae illo nemo cumque optio, provident rem cupiditate facilis dicta nesciunt modi dignissimos, architecto delectus quibusdam aliquid vero assumenda veritatis voluptas unde. Porro facere voluptatibus ex amet quia libero aspernatur rerum iste rem doloribus autem expedita, aliquid magni omnis natus ipsam cupiditate tempore? Quis eius aliquam mollitia distinctio quo hic. Blanditiis laboriosam voluptates rerum officiis. Voluptatem aperiam cupiditate facere, qui corrupti, accusamus unde deleniti neque odio a consequatur. Aliquam mollitia amet corporis enim quas voluptate iure. Sapiente sit eum, maxime excepturi vel ea veritatis. Nemo rem eligendi tempora, saepe, omnis asperiores, commodi impedit quo dolorem reiciendis error nesciunt labore. Cupiditate eaque dolorem hic quidem consectetur, maiores expedita aut minus fugiat amet exercitationem magnam magni recusandae? Quia aspernatur, sint voluptatibus voluptatum veniam corrupti. Quibusdam, accusamus nulla. Eius sapiente, nobis, necessitatibus natus perspiciatis itaque cum voluptas veniam dolorum qui, possimus assumenda dolor provident minus sequi quibusdam modi dolores nostrum maiores accusamus earum blanditiis. Ex ad nesciunt ipsa rerum qui tenetur vitae, ipsam impedit suscipit molestias quibusdam explicabo repudiandae nulla perferendis! Enim officia recusandae, quia totam nihil, rerum vel dolores consequuntur praesentium ut quis maxime quod labore sapiente? Libero autem nobis officiis eveniet nihil quod dolorem labore, eius quisquam. Esse, sed labore quis consectetur natus similique odio, nostrum incidunt, sunt tempora earum aliquid eveniet in cupiditate a qui quasi enim cumque iure soluta porro magni debitis quo. Eos quos a vitae molestias perspiciatis magni similique facilis! Fugiat impedit autem consectetur, ipsum molestias distinctio, earum velit deserunt aut dignissimos vitae? Odio, error.
      </Note>
    );
  }

  // если свойство editing === true значит рендерим компонент отвечающий за редактирование заметки
  if (editing) {
    result = (
      <Editor />
    );
  }
  return result;
};

ShowNotes.propTypes = {
  isFullNote: PropTypes.bool.isRequired,
  showFullNote: PropTypes.func.isRequired,
  editing: PropTypes.bool.isRequired,
};

// ShowNotes.defaultProps = {

// };

const mapStateToProps = state => ({
  editing: state.editing,
});

export default connect(mapStateToProps)(ShowNotes);
