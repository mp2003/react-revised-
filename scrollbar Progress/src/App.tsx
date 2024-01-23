import React, { useEffect, useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [scrollValue, setScrollValue] = useState<number>(0);

  const onScroll = () => {
    const winScroll: number =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height: number =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;
    setScrollValue(scrolled);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div className="wrapper">
        <div
          className="progressStyle"
          style={{ width: `${scrollValue}%` }}
        ></div>
      </div>
      <h1 style={{ textAlign: "center" }}>Scroll bar Animation</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae ut animi
        voluptatem inventore laboriosam ullam laudantium pariatur vero quam
        aliquid nemo ratione reprehenderit, accusamus esse unde possimus quaerat
        voluptate assumenda. Libero inventore enim necessitatibus voluptas
        delectus dignissimos odio aspernatur ipsa? Repudiandae laboriosam
        consequuntur rerum perspiciatis soluta odit iusto adipisci, sit beatae
        nisi quo tempora? Facere nemo repellat amet tempora doloribus. Quod
        praesentium explicabo voluptate sunt aperiam dolor incidunt officiis
        quidem quam at harum, corrupti tempora eligendi aliquam nulla laboriosam
        perspiciatis sit consectetur amet quis vitae dicta odit. Officia,
        nesciunt inventore. Nam ut unde excepturi quae nihil officia soluta id
        dolor! Minima vitae et aliquid in suscipit labore ullam obcaecati, eos
        quae hic, dolore maiores laudantium. Reprehenderit quis nostrum ipsam
        ut! Architecto qui aperiam, nostrum et numquam velit aliquid dolor
        perspiciatis blanditiis ducimus suscipit nulla vitae voluptatum eum
        sequi, eveniet aspernatur quis error! Cupiditate, est aut facilis
        officia id inventore provident! Nesciunt eligendi molestias dicta libero
        omnis ipsam eos. Necessitatibus, animi ut. Perspiciatis, non qui error
        obcaecati doloremque ipsum voluptas numquam aut praesentium aliquam
        facilis, debitis omnis nobis adipisci quisquam amet! Adipisci laborum
        laudantium iste amet aliquam vero veniam perspiciatis ipsa sunt
        architecto eius mollitia voluptatem qui, illo maxime tempore provident
        facilis. Ab ullam quia animi ratione suscipit aut in commodi! Dolorum
        deserunt nobis ipsa illum exercitationem magni odit. Dolor consequuntur
        voluptates rerum sit, neque quam molestias autem odit, necessitatibus
        accusantium expedita ea corrupti, corporis quibusdam veritatis officiis
        nisi soluta architecto. Voluptatum accusantium sunt quis iure, quod
        repellendus dolorum minus voluptatibus numquam iste ipsa laborum rem
        modi doloremque. Minus provident distinctio aut corporis molestias animi
        numquam temporibus, quam impedit itaque. Esse. Magnam quae, impedit
        eveniet laboriosam laudantium alias accusamus aliquid assumenda ab vitae
        corporis excepturi natus molestiae totam voluptates non, nostrum labore?
        Repudiandae vero, omnis illo id delectus earum! Aliquam, quisquam!
        Quisquam, illum? Eius vel dicta laudantium sequi perferendis fugit in
        quasi at, explicabo obcaecati nihil enim exercitationem delectus error
        nisi tempore. Cum molestiae, culpa pariatur doloremque expedita
        voluptatum enim provident? Odio ullam, accusamus dolorem ex, id, unde
        ratione similique quidem enim voluptates et dolore quibusdam sit.
        Necessitatibus saepe amet laudantium, labore corporis in tempore ad
        earum cum, sed nobis nesciunt. Quia explicabo blanditiis quis totam
        atque alias repellendus ipsum voluptates, facere, a doloribus doloremque
        saepe quas veritatis enim voluptatibus natus sunt repudiandae aut quo
        ipsa optio voluptate. Consequatur, quidem necessitatibus. Veritatis
        facilis reiciendis nostrum ab illum et, dicta soluta aut voluptates
        perspiciatis numquam. Quis suscipit reiciendis quas tempora ipsam
        inventore nobis vel, soluta ad, sit excepturi? Quos quibusdam alias
        placeat. Voluptates, iure similique suscipit optio voluptate tenetur
        alias expedita ad beatae rerum cumque nisi nulla quia nesciunt quis,
        minus nobis voluptas quod molestias perferendis doloremque accusantium
        dolore impedit quibusdam. Deleniti. Unde eligendi, quos nemo atque
        labore eveniet in quis ad officia perspiciatis, consequatur architecto?
        Non, vitae labore, eligendi laboriosam eaque voluptatibus aspernatur
        officia in facilis dicta, ea quos! Ab, eum? Maiores dolore ipsa dolores
        similique aut illo eum officia distinctio nobis ratione excepturi, nisi
        vero ab delectus aperiam provident! Similique vitae odit culpa.
        Recusandae laudantium eius, minus architecto nemo blanditiis. Deleniti
        pariatur reprehenderit distinctio? Error iusto ea facilis sequi
        perspiciatis quos asperiores dicta nulla ab temporibus blanditiis
        perferendis delectus, at sapiente rerum magnam nobis est, unde
        similique, numquam qui nihil! Possimus corrupti quo illum praesentium
        adipisci labore veniam repellendus quia quasi distinctio, veritatis quod
        autem quis laborum quos quas similique iure repellat. Laboriosam
        repellendus id incidunt accusamus ea, quidem unde! Reiciendis neque
        voluptatem qui esse, libero vero voluptatibus impedit aspernatur? Ut
        ratione sunt explicabo dolore ad, quae adipisci saepe quas! Quam sit
        animi voluptatibus ea adipisci saepe repellat magnam nemo. Asperiores
        expedita saepe beatae officia laboriosam esse minima debitis rem, est
        ullam recusandae natus magnam. Dolorem laborum voluptas, quo dolores
        velit, eius quisquam mollitia quia accusantium tempore officiis nostrum
        dolor! Placeat alias nam perspiciatis sit nihil vitae officia ratione
        iste quae. Id ex ullam quam veniam, fugit obcaecati, sequi iure
        voluptatum repudiandae sint quasi et. Adipisci culpa magni omnis
        necessitatibus. Veniam impedit ab debitis quas minus, itaque rem labore
        neque, praesentium dolor accusamus, nemo adipisci saepe. Aut soluta
        eveniet quae sed, beatae ullam? Illo laudantium, consectetur suscipit
        aliquam beatae aspernatur! Iste quos expedita rerum excepturi quibusdam,
        optio officia perferendis quod provident quis nihil, vitae beatae hic
        maxime minima aspernatur. Ipsa magni ab accusamus quia inventore amet
        voluptatum necessitatibus dolorum soluta. Ipsa error enim laudantium ab
        debitis quis nesciunt quam, ad repellendus, maiores et nihil accusamus
        aut nobis doloribus libero dolore, quibusdam reprehenderit vero vel
        amet! Fuga quasi necessitatibus quam culpa? Eum a, minus possimus
        tenetur aperiam repudiandae illo. Animi illum, nisi explicabo pariatur
        officia eveniet ut voluptate culpa exercitationem, est corporis, sint
        optio distinctio? Sit molestias quis laboriosam accusantium optio?
        Dolorem iste enim atque hic similique, quae incidunt praesentium animi,
        sapiente ad ex illum delectus quam accusantium alias. Eveniet sapiente
        ipsa quod explicabo impedit omnis recusandae velit dignissimos amet ex?
        Minus error, soluta alias a labore ut unde debitis quidem veritatis
        possimus placeat. Temporibus harum deserunt, sint sequi architecto
        molestiae fugiat consequuntur officia necessitatibus tempore est ratione
        unde maiores corporis! Et culpa animi ducimus placeat impedit excepturi
        nesciunt, dolor unde dicta exercitationem in accusamus eos veritatis
        corrupti illum sunt. Earum, officiis nobis quibusdam maiores magni ex
        doloremque impedit eveniet harum! Suscipit exercitationem veritatis ex
        nam, placeat fugit quibusdam cupiditate sequi fugiat inventore
        voluptatum adipisci itaque molestias vitae! Aut, placeat eligendi
        quibusdam quos nostrum amet neque praesentium quia eum ipsam iusto.
        Totam suscipit obcaecati saepe, id dicta corrupti cupiditate explicabo
        eveniet doloribus quos quis ullam temporibus harum nemo at quam hic?
        Sunt voluptatibus perspiciatis eius quisquam odit veritatis numquam
        magnam non! Quisquam corporis ullam at cumque magni repudiandae voluptas
        magnam incidunt? Rem eius nisi fuga quis veniam temporibus provident
        explicabo? A magnam reiciendis tenetur dicta ad cupiditate quam, maxime
        sapiente quas! Omnis, facere! Quasi minus rem quod nobis laborum,
        reiciendis ab dignissimos itaque aspernatur ipsa voluptate quibusdam
        sint mollitia aliquid laudantium necessitatibus dolorem magni
        recusandae. Alias natus ipsum impedit voluptate perspiciatis. Veniam
        quam voluptatem tempore perferendis mollitia in quibusdam, velit quas
        fugiat. Non quam et ipsum libero autem pariatur, necessitatibus
        consequuntur nam nostrum eligendi. Architecto ex cum soluta enim veniam
        expedita! Id sint maiores quia in suscipit totam iste. Doloribus quos ea
        natus sequi eligendi repudiandae quis! Iusto dolore mollitia, dolorum,
        doloribus id explicabo, soluta reprehenderit quas ad incidunt rerum
        quis? Consectetur rerum soluta voluptatibus fugit voluptates? Suscipit
        excepturi provident eum id impedit saepe inventore natus adipisci, ad,
        fugit unde sequi nemo laboriosam recusandae corrupti delectus. Ullam non
        inventore alias! Tempora? Facilis cum saepe quae ut amet maxime beatae
        temporibus! Eaque sint iure alias nihil adipisci recusandae laborum?
        Animi odit sit excepturi obcaecati vero dolorem omnis error quo,
        deleniti, pariatur laboriosam. Dolore perferendis autem quasi error
        maiores nam debitis, minima commodi, eum quas illo, excepturi ex
        quaerat. Eligendi sunt dolores tenetur illo dicta nemo voluptas itaque,
        cum id officia, iusto delectus. Fuga, amet quae esse autem quibusdam
        dolorum voluptate id voluptatem dolor nobis mollitia harum laboriosam
        facere sit! Nesciunt cupiditate illo atque quae in et, suscipit iusto.
        Autem ad laborum porro. Ratione ex, doloribus sed minus tempore deserunt
        eum quod at consequatur ipsa mollitia sit quaerat adipisci, atque
        cupiditate ducimus! Recusandae cupiditate perferendis eum maxime
        delectus voluptas laborum, optio cumque sapiente. Assumenda magni
        provident inventore quasi enim nobis. Similique excepturi, in eos
        molestias, facilis obcaecati sit accusamus laborum animi, hic
        repudiandae placeat enim architecto sed eveniet corporis! Vel cum in
        vitae. Accusantium quidem asperiores nesciunt illum cupiditate neque
        dolor ullam quae, porro, temporibus reprehenderit! Dicta perspiciatis
        fugit consectetur voluptatum natus provident. Fuga doloremque nisi ut
        repellendus ab voluptatum saepe culpa accusantium! Earum, quos alias
        facere voluptatibus dignissimos sint minus hic. Incidunt provident quo
        nobis excepturi facilis, recusandae iusto, magnam sequi id voluptates
        quas placeat architecto suscipit tenetur aliquam nihil quisquam eveniet?
        Voluptatem, ex. Nesciunt, accusantium eveniet voluptates sapiente ab
        minus aliquam ipsum amet modi possimus quasi dolor quae commodi fuga.
        Illo dicta molestias doloribus. Amet porro, consectetur sunt itaque
        autem impedit. Veritatis minima laboriosam amet magni, autem eligendi
        blanditiis qui. Voluptatum alias quas asperiores veniam recusandae
        veritatis dicta perferendis reprehenderit doloremque aliquam ipsa sit
        delectus, minus rerum incidunt dignissimos? Tenetur, cupiditate. Aliquid
        modi, odit illo laudantium iste quibusdam laborum placeat est
        blanditiis, in dolores! Fugit, esse molestias quas, ullam, aliquid
        mollitia voluptas alias odio tempora ut dicta blanditiis similique
        corporis? Eos. Et voluptatibus odit unde quis eaque rem, nemo sit enim
        commodi architecto laboriosam corrupti maxime placeat repellat debitis
        ipsam tempore atque accusamus ratione quod id labore perferendis!
        Laudantium, tenetur. Commodi! Dolore tenetur voluptatibus sed soluta
        odit, quisquam possimus accusamus. Nisi corrupti fugit iste facere
        aliquam beatae magnam fuga tempora vero ullam? Quam quo eum veniam cum
        laudantium voluptatibus pariatur accusantium! Tenetur eligendi cumque
        incidunt totam quo hic corrupti. Iusto reprehenderit esse doloribus
        nihil quis placeat dolores. Quisquam porro ea necessitatibus deserunt
        voluptas sit quae ut sint. Provident repudiandae eos fugit! Ea cum hic
        nemo animi dolorum, molestiae tempora repellendus quas error beatae
        iusto nostrum ullam illum quia veritatis doloribus quae sunt laboriosam
        natus voluptatibus adipisci necessitatibus obcaecati dolores! Illum,
        architecto. Modi porro, consequuntur autem fugit animi exercitationem
        consequatur dolore. Earum vero architecto qui deleniti sed reiciendis
        repellat consequatur in, odio quaerat. Iste unde accusamus laboriosam,
        ullam amet minima cum vel? Sint, fuga deserunt harum quia assumenda
        dolorum excepturi fugiat iure, omnis magnam quaerat, obcaecati maiores
        molestias reprehenderit? Culpa iste libero debitis, inventore possimus
        dignissimos aut facilis earum quisquam neque illo? Blanditiis quo
        possimus rem aliquam repellat eius? Doloremque et voluptas fugit sequi
        debitis odit aperiam. Voluptatibus fugiat quod sequi ea ducimus sit!
        Sint excepturi voluptatem pariatur, illum suscipit distinctio eaque. Id,
        animi debitis perspiciatis iusto alias fugiat laboriosam eligendi
        numquam eum doloribus magni dolor placeat tempore suscipit quisquam!
        Natus rem sint dignissimos quasi qui ipsa in delectus repellat sequi
        tempore! Vero et dolor commodi. Libero voluptatum earum esse at nesciunt
        accusantium suscipit magni ab quod, corporis nobis quaerat, fuga
        temporibus obcaecati, ipsa perferendis cum sapiente explicabo nostrum
        repellat. Consequuntur, id? Enim consectetur excepturi eveniet odit.
        Sapiente delectus ullam quam unde iure neque nemo! Ducimus non,
        similique illo officia corporis animi itaque quos praesentium dolor eum
        veniam? Vitae aliquam ipsam illo. Molestiae quae dolor error, earum
        pariatur veniam, fugit temporibus, adipisci ipsum magnam et ratione
        tempore maiores vel quos dolorem iure corrupti recusandae perspiciatis
        cupiditate explicabo placeat ullam distinctio? Nostrum, nobis! Tempore
        quasi illo error. Quas perspiciatis minima eius doloremque reprehenderit
        sint molestiae accusamus, nostrum asperiores illum reiciendis? Fugiat
        beatae, nesciunt est esse minus dolorum nisi voluptates, quae distinctio
        impedit quisquam! Optio nihil ratione veniam dolorem, labore minima
        placeat consequuntur molestias, ipsam ab aliquam iusto nobis blanditiis
        voluptate nostrum officia iste. Similique, laboriosam libero expedita
        consectetur ex repudiandae natus voluptate qui? Doloribus, aut fugiat?
        Molestiae in eligendi eveniet maxime quibusdam, consectetur omnis
        obcaecati cupiditate suscipit exercitationem ratione nobis illo.
        Quibusdam ratione quae eligendi temporibus ipsa architecto ducimus
        exercitationem dignissimos laborum debitis. Esse vel, unde atque
        explicabo laborum doloremque numquam facilis rem, corrupti optio dolorem
        animi est adipisci voluptatibus non ut molestias tempore? Ea earum fuga
        hic voluptatum beatae illo voluptatem libero. Non qui vitae quibusdam
        minima dolorum corrupti voluptatibus, illum voluptas fuga ad animi
        aperiam accusamus aliquid mollitia maxime quidem corporis iusto
        consectetur enim quo iure eligendi. Doloribus necessitatibus at tempore.
        Dignissimos porro ut facilis consequuntur tenetur rerum enim non
        molestias, provident nisi amet vero ratione accusantium debitis eveniet
        natus consectetur ex accusamus? Veritatis molestias in nisi autem
        maiores, exercitationem soluta. Architecto, consequatur, eum iste amet
        nam excepturi quod eligendi fugiat ducimus, velit soluta sed blanditiis
        pariatur laborum. Reprehenderit amet perferendis culpa accusantium magni
        soluta! Odit nulla a sed sapiente! Nobis! Corporis atque animi
        temporibus deleniti neque repellat sit tempore adipisci perferendis
        facere expedita, voluptatibus nesciunt consequuntur possimus error sequi
        quo esse aperiam harum! Temporibus, omnis ad molestias animi illo
        voluptatibus. Cupiditate ipsam, rerum quod eius odit cum autem cumque et
        praesentium voluptatem accusamus voluptatibus alias ea molestiae culpa,
        quo dolorem distinctio provident unde ut nisi inventore blanditiis
        facere! Sapiente, cumque. Temporibus, eaque porro sequi magni recusandae
        est assumenda veritatis consequatur, accusantium nulla aliquid odio qui
        laborum voluptates vero sint suscipit quos voluptatem, earum in
        excepturi quis quidem? Error, minus laudantium. Dignissimos sapiente
        vitae nam, incidunt nobis laudantium mollitia animi reprehenderit quia.
        Sapiente sed aut cumque quia, error, reprehenderit neque obcaecati ipsa
        aliquam asperiores harum. Incidunt, pariatur? Id dolorum libero saepe.
        Vitae quo rerum deleniti magni architecto deserunt consequuntur
        accusantium, tenetur fugiat, libero exercitationem. Necessitatibus ad
        eaque hic sequi illum animi voluptate veritatis quasi, asperiores,
        sapiente voluptatibus dicta reiciendis nulla maiores! Sit molestias
        repellendus voluptate laborum provident aperiam cumque earum ullam id?
        Eveniet reprehenderit obcaecati porro sequi quis odit ratione quae
        fugiat in. Totam magni repellendus officiis dignissimos nobis ipsam
        similique. Tenetur natus iusto nihil eum doloremque vitae possimus,
        officia ipsum iure illo ipsam quidem placeat molestiae omnis alias,
        cumque sint doloribus quod quasi, minus eligendi soluta dicta.
        Asperiores, possimus sunt! Vero similique commodi vel error voluptatem
        facilis quam, excepturi rerum suscipit quia, consectetur recusandae
        cumque sunt veritatis distinctio molestias. Ad perspiciatis perferendis
        voluptatibus excepturi architecto sapiente possimus nesciunt sit quo.
        Architecto tempore numquam dignissimos qui optio dolorum ratione fugiat
        voluptas unde, distinctio accusamus sed cum tempora corporis, temporibus
        soluta atque quia nostrum vero, possimus ad! Suscipit qui quibusdam
        aperiam. Quidem! Aspernatur dignissimos atque quo, enim incidunt ullam
        magnam molestias reiciendis ipsam ab. Iste sunt, placeat, natus
        reiciendis similique rem hic enim quos optio impedit odit, modi libero
        ipsam eius esse. Repellendus ratione dolores explicabo porro id.
        Suscipit, maiores esse facere deserunt temporibus at neque consectetur
        repudiandae dolore modi iste adipisci veritatis! Expedita eius
        doloremque cum possimus laborum enim deleniti rerum. Laborum beatae
        quaerat deserunt minus ipsa ipsum nostrum quae ipsam veniam deleniti
        saepe neque eaque unde illum dignissimos, eligendi mollitia praesentium
        accusamus labore perspiciatis nobis maiores vel tenetur? Iste, fuga! Ut,
        deleniti? Aperiam incidunt, tempora maxime enim in eveniet iure
        explicabo sit blanditiis minima suscipit cupiditate possimus beatae
        consequuntur neque corrupti ut mollitia autem. Veniam culpa placeat esse
        cumque nesciunt. Modi magnam repudiandae voluptatum, veniam
        reprehenderit distinctio expedita aut corporis repellendus quasi eum
        voluptate. Nulla rerum expedita aliquid soluta laboriosam! Similique
        modi neque adipisci blanditiis obcaecati qui praesentium quidem nulla.
        Dignissimos voluptatem sed quaerat corporis nisi nemo vero distinctio
        autem nostrum magnam pariatur, perferendis consequatur quas repellendus
        asperiores a quidem magni architecto eligendi! Quia dignissimos suscipit
        error deserunt aliquid repellendus! Illum quae reiciendis quia cum eum
        possimus mollitia sunt, voluptate quo libero omnis vel magnam eius
        asperiores expedita voluptatem nesciunt dolore culpa nulla harum fugiat
        deserunt pariatur? Error, modi officia? Commodi iste illo rerum ducimus
        autem modi, impedit aliquam ipsum optio tempora exercitationem quam qui
        omnis asperiores eveniet non nihil. Impedit ipsa sit, voluptas dolor
        veniam mollitia a dolore aspernatur. Aperiam voluptatem vel odio fugiat
        ratione, nesciunt earum nisi. Molestiae fuga iusto sed vero nihil
        veniam, repudiandae delectus fugit blanditiis enim, nemo ducimus!
        Placeat, quibusdam quasi. Pariatur impedit odio omnis! Quos doloribus
        reprehenderit porro assumenda perspiciatis culpa. Nihil quidem corrupti
        accusamus corporis odit officia sit aliquid beatae harum accusantium!
        Quam blanditiis asperiores neque. Ad ut itaque tenetur commodi quis
        neque. Quidem sint libero asperiores doloremque. Repudiandae
        consequuntur magni consequatur odio, est tempora blanditiis eligendi? Ad
        officiis praesentium assumenda fuga, aliquam sequi aut temporibus vel
        exercitationem quae voluptatibus qui vero dolores. Eaque debitis, itaque
        molestias fugiat magni ipsa? Ratione distinctio laudantium neque
        explicabo, ullam quasi quod fuga eum aperiam impedit repudiandae nisi
        reprehenderit eius earum saepe doloribus at nulla aspernatur quo. Ab
        vitae vel optio, totam saepe accusantium voluptate eveniet asperiores
        nulla illo blanditiis ipsa et quo dicta eligendi corporis iusto fugiat?
        Possimus ullam voluptas laudantium perspiciatis alias, facilis
        consectetur eaque! Voluptatem error neque tenetur quis fugit dolore est
        hic consequatur, a reprehenderit odit officia beatae tempore deleniti.
        Maiores, est tempora quos dolorum quaerat similique reprehenderit
        voluptate amet iste. Deserunt, unde! Error dolor, aperiam nisi
        voluptates incidunt quos cupiditate! Totam provident tenetur et animi
        cumque fugit veritatis laudantium praesentium fuga aperiam, sapiente
        consectetur, culpa, aliquam facere minima quas natus commodi.
        Doloremque. Porro dicta quos tempora esse dolore maxime molestiae neque
        quibusdam quis architecto est, praesentium corrupti excepturi enim, nemo
        accusantium hic temporibus. Harum molestiae ab error voluptates voluptas
        eos quidem quis? Quis perferendis quas obcaecati. Sunt quaerat ipsam
        recusandae autem, debitis doloremque, earum magni laboriosam perferendis
        atque maiores omnis adipisci unde ea eveniet placeat officiis illo,
        similique excepturi soluta tempore deleniti? Labore magni obcaecati
        quaerat error blanditiis! Tempora fugiat, consequatur quod delectus enim
        saepe nihil quia dicta doloribus nisi quos quis doloremque natus amet
        aliquam explicabo perspiciatis. Neque iure officia enim? Iusto adipisci
        eum dolores modi molestiae eaque tempore vitae porro eos temporibus quam
        fugit, voluptas minus mollitia quibusdam iste quasi repellendus. Numquam
        excepturi eius quas autem, nemo neque inventore repudiandae. Dolore
        porro quidem reprehenderit excepturi, dignissimos odio ipsum veritatis
        quos? Consequuntur culpa aut nam esse quia quae animi excepturi possimus
        quis, obcaecati, sint provident quaerat. Rerum excepturi ex ipsum iusto.
        Minus soluta repudiandae eligendi qui animi numquam quaerat sint labore
        quas ab nesciunt laudantium quasi, maiores, voluptate neque, cum
        voluptatum tempore voluptates architecto veritatis perferendis. Eaque
        voluptates aperiam accusamus quis. Non obcaecati nesciunt suscipit et
        iure, distinctio laboriosam reiciendis voluptatibus error exercitationem
        minima tempora quis, soluta reprehenderit inventore. Fuga, odit totam.
        Temporibus nostrum, aut pariatur totam minus vitae voluptas asperiores!
        Aliquid adipisci, itaque perspiciatis impedit corrupti molestiae
        explicabo accusamus nulla cupiditate ducimus labore, ea doloremque illum
        dignissimos quas ipsam necessitatibus autem a eos repellendus
        voluptatibus excepturi rerum? Deleniti, totam odit! Fuga delectus fugiat
        sit excepturi sed quaerat laboriosam a in sunt omnis cum, accusantium
        tenetur cupiditate, saepe id architecto et necessitatibus impedit
        ratione rerum tempora nihil ducimus minima temporibus? Repudiandae? Est
        repellat maxime quam nobis saepe minus veniam molestias aperiam
        dignissimos quidem. Ipsam, esse distinctio incidunt, sint porro nulla
        qui odio eligendi natus, optio laborum beatae est libero error officia.
        Dicta beatae tenetur recusandae, dolore dignissimos incidunt ad optio
        repudiandae facere iusto natus necessitatibus! Nostrum qui ab
        voluptatibus optio, ipsa, inventore, quibusdam natus enim fugit id
        repellat rerum sunt quos. Provident unde inventore, necessitatibus natus
        nesciunt porro ex magnam tempore beatae quis saepe fugit, officiis
        commodi atque facere laudantium a! Nesciunt quam molestiae dicta,
        necessitatibus tempore magni esse quo eum?
      </p>
    </>
  );
};

export default App;
