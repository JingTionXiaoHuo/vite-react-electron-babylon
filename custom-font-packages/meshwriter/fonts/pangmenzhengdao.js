//  PANGMENZHENGDAO  PANGMENZHENGDAO  PANGMENZHENGDAO
// 

define(
  [],
  function(){

    return function(codeList){

      var font={reverseHoles:false,reverseShapes:true},nbsp=' ';

      font["成"]        = {
        sC             : [
                           'OiA< MFA< L_C: KHA> I(A> KiEm I·J% D§J% D§H£ I,H£ I,B½ I,BiH¿BD H©A»HmA¡ HLAaH%AN G}A>GPA> EyA> FDB§ FqB§ F¯B§FÃB» G0C(G0CB G0G: D§G: D§B« D2A< B8A< B­B« B­Ko IHKo H½Li K%Li KXKo M!Ko LoLg N³Lg O¿J% L%J% L·G³ M{I@ O¿I@ M­Eg OiA<'
                         ],
        xMin           : 59,
        xMax           : 941,
        yMin           : -3,
        yMax           : 723,
        wdth           : 1000
      };
      font["都"]        = {
        sC             : [
                           'KuL_ OJL_ N8Gi OJGi MwA¹ K­A¹ M2FD K·FD M%J½ KuJ½ KuAD I³AD I³L_ J±L_ KuL_',
                           'AmHÁ DuHÁ DuJi A£Ji A£L# DuL# DuLc F_Lc F_L# IRL# IRJi F_Ji F_HÁ FÃHÁ GiJ4 I@J4 HyHÁ IiHÁ IiGi EHGi D±Fµ I%Fµ I%C! I%BuH¹BM H©B%HkA« HNAkH(AY G¥AHGXAH DuAH C:AH BqAH BqEH AkEH C0Gi AmGi AmHÁ'
                         ],
        hC             : [
                           [],
                           ['G!D§ G!Eo DuEo DuD§ G!D§','G!C* G!Ca DuCa DuBm FiBm F£BmF´B¡ G!B³G!C*']
                         ],
        xMin           : 20,
        xMax           : 900,
        yMin           : 1,
        yMax           : 720,
        wdth           : 920
      };
      font["天"]        = {
        sC             : [
                           'AoAD FµFy AoFy AoHF GRHF GRJ· B2J· B2Lc GRLc I_Lc N£Lc N£J· I_J· I_HF ODHF ODFy IXFy HmE­ J«E­ O@AD LqAD H_E{ D6AD AoAD'
                         ],
        xMin           : 22,
        xMax           : 897,
        yMin           : 1,
        yMax           : 720,
        wdth           : 920
      };
      font["府"]        = {
        sC             : [
                           'L:C£ J4C£ IRFF KXFF L:C£',
                           'NqI_ NqHo OHHo OHG* NqG* NqBÃ NqBsN`BJ NNB!N0A§ MµAgMkAU MBADL·AD I±AD JHB­ K¿B­ L6B­LHB¿ LZC.LZCJ LZG* ILG* ILHo LZHo LZI_ NqI_',
                           'G!I_ IDI_ G_FR H4FR H4AD EÁAD EÁE@ DiE@ G!I_',
                           'I±Lc JFKu OHKu OHJ. DZJ. DZB± C£AB AmAB BFB± BFKu G»Ku GaLc I±Lc'
                         ],
        xMin           : 21,
        xMax           : 899,
        yMin           : 0,
        yMax           : 720,
        wdth           : 920
      };
      font["重"]        = {
        sC             : [
                           'OJIi I}Ii I}I. NÃI. NÃH³ NÃG½ NÃE» NÃEkN²EC N¡D¿NaD¡ NBDaM½DO MsD>MDD> I}D> I}C· NaC· NaB£ I}B£ I}BR OHBR OHA> AkA> AkBR GoBR GoB£ BRB£ BRC· GoC· GoD> BDD> BDG½ BDH³ BDI. GoI. GoIi AoIi AoJ{ GoJ{ GoK, B2K! B2LP N±Li N±K8 I}K0 I}J{ OJJ{ OJIi'
                         ],
        hC             : [
                           ['M@G½ I}G½ I}GH M@GH M@G½','I}EZ L£EZ L¿EZM.Em M@E¡M@E» M@F6 I}F6 I}EZ','D#EZ GoEZ GoF6 D#F6 D#EZ','GoG½ D#G½ D#GH GoGH GoG½']
                         ],
        xMin           : 20,
        xMax           : 900,
        yMin           : -2,
        yMax           : 723,
        wdth           : 920
      };
      font["庆"]        = {
        sC             : [
                           'DZB» C{A> AeA> BFB» BFL! G½L! G{Li JBLi JcL! OPL! OPJ] DZJ] DZB»',
                           'G.AB DsAB HPG# D»G# D»Hk H·Hk H·J! K.J! K.Hk O*Hk O*G# J­G# J>F0 K«F0 OPAB L¥AB I«EZ G.AB'
                         ],
        xMin           : 17,
        xMax           : 903,
        yMin           : -2,
        yMax           : 723,
        wdth           : 920
      };
      font["西"]        = {
        sC             : [
                           'BZIo F8Io F8J¹ BVJ¹ BVL] O¡L] O¡J¹ K}J¹ K}Io O}Io O}B_ O}B#OPAu O!AJNeAJ BZAJ BZIo'
                         ],
        hC             : [
                           ['H2J¹ H2Io I¥Io I¥J¹ H2J¹','M¥H# K}H# K}F< K}EÃK±E± L#E}L8E} M¥E} M,D8 K@D8 J·D8JuDH JcDNJTDY JFDeJ:Do IÃD©I³E* I¥EPI¥Eu I¥H# H2H# H2F. F­D> D§D> F8FN F8H# DRH# DRB³ MXB³ MiB³MuB¿ M¥C*M¥C: M¥H#']
                         ],
        xMin           : 74,
        xMax           : 926,
        yMin           : 4,
        yMax           : 717,
        wdth           : 1000
      };
      font["安"]        = {
        sC             : [
                           'OPH§ NcH§ NcHL OPHL OPF© NcF© NcFw NcDµ M¥D_M!D1 LBC§K_C] LZC@MVC, NRB»OPB± OPAB K£AeHZBZ F§AÁE&Ay CJARAeAB AeB± BcB»C^C, DXC@EVC] DqC§C³D1 C0D_BPDµ BPF© AeF© AeHL BPHL BPH§ AeH§ AeKu GHKu F¹Le IFLe IwKu MuKu MÃKuNHKd NqKRN±K4 O,J¹O>Jo OPJFOPI» OPH§'
                         ],
        hC             : [
                           ['DgHL LNHL LNIJ M:IJ M:Iq M:I­M(I¿ L¹J.L}J. CyJ. CyIJ DgIJ DgHL','LNE¡ LNF© DgF© DgE¡ EeEJF`D¿ GZDoHXDF IVDoJSD¿ KPEJLNE¡']
                         ],
        xMin           : 17,
        xMax           : 903,
        yMin           : 0,
        yMax           : 721,
        wdth           : 920
      };
      font["上"]        = {
        sC             : [
                           'I(AP F¿AP A¯AP A¯B­ F¿B­ F¿LT I(LT I(H¿ N#H¿ N#Gc I(Gc I(B­ O%B­ O%AP I(AP'
                         ],
        xMin           : 37,
        xMax           : 882,
        yMin           : 7,
        yMax           : 713,
        wdth           : 920
      };
      font["海"]        = {
        sC             : [
                           'DLA< B4A< CsE} E©E} DLA<',
                           'CsFZ B4IÃ C@IÃ B4Lk DLLk E©I( D¡I( E©FZ CsFZ',
                           'GHLk IuLk IFK­ O½K­ O½JB FFJB GHLk',
                           'OÃEH ODEH ODCÃ O£CÃ O£B§ ODB§ ODB_ ODAµN­Ac N]A@N%A@ K¡A@ LJBL L½BL M.BLM:BX MHBgMHB{ MHB§ H*B§ GcB§G0C7 F¡CkF¡D0 F¡EH F.EH F.F{ F¡F{ F¡Io ODIo ODF{ OÃF{ OÃEH'
                         ],
        hC             : [
                           [],
                           [],
                           [],
                           ['MHCÃ MHEH HuEH HuDa HuDDHªD2 H½CÃI6CÃ J8CÃ I½D¿ KkD¿ K±CÃ MHCÃ','HuH@ HuF{ J>F{ I½G± KkG± K¹F{ MHF{ MHH@ HuH@']
                         ],
        xMin           : 57,
        xMax           : 943,
        yMin           : -3,
        yMax           : 724,
        wdth           : 1000
      };
      font["武"]        = {
        sC             : [
                           'JcC< JcAw AkA@ AkB© A»B« A»G: D.G: D.B¹ EDB¿ EDG¹ GZG¹ GZFo J@Fo J@E* GZE* GZC* JcC<',
                           'AkHa AkJ% I±J% I<Le K¡Le LPJ% M!J% LVL@ NNL@ OHHa L§Ha NwA@ L4A@ JBHa AkHa',
                           'A¥Ja A¥L% HXL% HXJa A¥Ja'
                         ],
        xMin           : 20,
        xMax           : 899,
        yMin           : -1,
        yMax           : 721,
        wdth           : 920
      };
      font["汉"]        = {
        sC             : [
                           'O8CP O8AH M­AmLnB0 KPBuJFCT I<BuGÂB0 F¥AmEVAH EVCP G:C½HmD¯ G]EÁFwGR E³H©EcJZ G¡JZ HcG½JHF: LBH2M!J· EVJ· EVLZ O8LZ O8J· N±I.N%Gl M>F(L!D¯ MTC½O8CP',
                           'C6FZ A}I½ B§I½ A}Lc C³Lc EHI# D@I# EHFZ C6FZ',
                           'C³AD A}AD C6E¡ EHE¡ C³AD'
                         ],
        xMin           : 29,
        xMax           : 891,
        yMin           : 1,
        yMax           : 720,
        wdth           : 920
      };
      font["深"]        = {
        sC             : [
                           'NJDe OHAF M2AF L6De NJDe',
                           'FiDe H¡De G£AF EkAF FiDe',
                           'OHFk OHE# KeE# KeAF INAF INE# EkE# EkFk INFk ING0 KeG0 KeFk OHFk',
                           'O!Ge LoGe J¡I­ M4I­ O!Ge',
                           'G§I­ J8I­ HHGe E·Ge G§I­',
                           'OHJ± OHJ8 M>J8 M>Jw M>J«M1J¹ M#K#LµK# GuK# GuJ8 EkJ8 EkK# EkLi GuLi MmLi M»LiN@LW NiLFN©L( O#K­O6Kc OHK:OHJ±',
                           'AmA> C%E} E:E} C£A> AmA>',
                           'C£Li E:I% D2I% E:FZ C%FZ AmIÁ BuIÁ AmLi C£Li'
                         ],
        xMin           : 21,
        xMax           : 899,
        yMin           : -2,
        yMax           : 723,
        wdth           : 920
      };
      font["圳"]        = {
        sC             : [
                           'J¿AB LÃAB LÃG· LÃLe J¿Le J¿AB',
                           'M·AB O»AB O»G· O»Le M·Le M·AB',
                           'J%G· J%Le H!Le H!D. GmAD IqAD J%D. J%G·',
                           'B<AB B<C! F¹CP F¹Aq B<AB',
                           'B<H< B<I¿ G#I¿ G#H< B<H<',
                           'E{Le E{B# CgB# CgLe E{Le'
                         ],
        xMin           : 61,
        xMax           : 939,
        yMin           : 0,
        yMax           : 721,
        wdth           : 1000
      };
      font["南"]        = {
        sC             : [
                           'IZI· M¥I· N,I·NPI§ NuIuN²IY O*I>O:H¼ OJHuOJHJ OJB« OJB4N³A| NVABM¥AB K·AB LgBu L·Bu M*BuM;B¨ MLB¹MLC. MLH# MLH<M;HM M*H_L·H_ CoH_ CoAB AqAB AqI· G6I· G6Jm AiJm AiL4 G6L4 G6Le IZLe IZL4 O<L4 O<Jm IZJm IZI·',
                           'CÃDw G6Dw G6EZ CÃEZ CÃFÁ D­FÁ DJH2 FuH2 G4FÁ IcFÁ J!H2 LLH2 K¯FÁ LqFÁ LqEZ IqEZ IqDw LqDw LqC2 IqC2 IqAB G6AB G6C2 CÃC2 CÃDw'
                         ],
        xMin           : 19,
        xMax           : 900,
        yMin           : 0,
        yMax           : 721,
        wdth           : 920
      };
      font["京"]        = {
        sC             : [
                           'AiA@ B¡D% D£D% CmA@ AiA@',
                           'L4D% N6D% OLA@ MJA@ L4D%',
                           'AiJ4 AiK{ GkK{ GBLe IoLe I·K{ OFK{ OFJ4 AiJ4',
                           'L­Dy I}Dy I}B½ I}BmIlBE IZAÁI<A£ HÁAcHwAQ HNA@GÃA@ E¿A@ FkBm G(Bm GBBmGTB¡ GgB³GgC* GgDy BHDy BHIT NgIT NgFT NgF%NUE¡ NDEVN%E8 M«D½MaD¬ M8DyL­Dy'
                         ],
        hC             : [
                           [],
                           [],
                           [],
                           ['DHH% DHF( KµF( L,F(L>F: LPFLLPFg LPH% DHH%']
                         ],
        xMin           : 19,
        xMax           : 901,
        yMin           : -1,
        yMax           : 721,
        wdth           : 920
      };
      font["杭"]        = {
        sC             : [
                           'F¯I} G.AJ EmAJ EJI} F¯I}',
                           'CoAJ CoJF AmJF AmK­ CoK­ CoLi E8Li E8K­ G.K­ G.JF E8JF E8AJ CoAJ',
                           'JPLk LeLk LeKm O0Km O0J% G§J% G§Km JPKm JPLk',
                           'NFI, NFC# NFBµNSB¨ NaByNuBy OHBy NqA: M«A: M>A:L­An LVAÃLVBk LVGg J6Gg J6C« ILAH GVAH H@C« H@I, H­I, J6I, LVI, LcI, NFI,',
                           'CPI} C.AJ AmAJ A±I} CPI}'
                         ],
        xMin           : 21,
        xMax           : 899,
        yMin           : -4,
        yMax           : 724,
        wdth           : 920
      };
      font["广"]        = {
        sC             : [
                           'DaC% C£AN AoAN BNC% BNKm GcKm G2LX IsLX J!Km ODKm ODJ* DaJ* DaC%'
                         ],
        xMin           : 22,
        xMax           : 897,
        yMin           : 6,
        yMax           : 715,
        wdth           : 920
      };
      font["州"]        = {
        sC             : [
                           'D,E. D,L_ F%L_ F%E. E:AH C@AH D,E.',
                           'MLL_ OFL_ OFAw MLAw MLL_',
                           'L«J6 M>CÁ KqCÁ K:J6 L«J6',
                           'H6J6 HmCÁ FÁCÁ FiJ6 H6J6',
                           'AmC» B>J6 C¯J6 C8C» AmC»',
                           'H©Ai H©L@ JkL@ JkAi H©Ai'
                         ],
        xMin           : 21,
        xMax           : 898,
        yMin           : 3,
        yMax           : 718,
        wdth           : 920
      };
      font["阿"]        = {
        sC             : [
                           'AkAD AkLg BoLg CeLg F}Lg E»Gm FµGm EmA» CuA» DoFH CuFH DXK! CeK! CeAD AkAD',
                           'G:C½ G:I­ L8I­ L8Ew L8EHL%DÃ K·DyKwDZ KXD<K0D+ J«C½J]C½ G:C½',
                           'K!B§ L!B§ L>B§LPB¹ LcC(LcCB LcJÃ G:JÃ G:Lg OHLg OHJÃ NyJÃ NyB½ NyBmNgBD NTA¿N6A¡ M»AaMqAO MHA>L¿A> JkAF K!B§'
                         ],
        hC             : [
                           [],
                           ['I:Hq I:E4 IeE4 I¡E4I³EF J!EXJ!Es J!Hq I:Hq'],
                           []
                         ],
        xMin           : 20,
        xMax           : 899,
        yMin           : -2,
        yMax           : 722,
        wdth           : 920
      };
      font["多"]        = {
        sC             : [
                           'L]D« AgD« B]F³ AyF³ BDH< D4H< B¥IÁ EBIÁ FwH< K(H< K½JZ AgJZ B]Lg D§Lg DgKÃ ONKÃ L©F³ K¡F³ JeF³ D§F³ DgFN ONFN L©A> K¡A> AyA> BDBm D4Bm B¥DL EBDL FwBm KBBm L]D«'
                         ],
        xMin           : 18,
        xMax           : 902,
        yMin           : -2,
        yMax           : 722,
        wdth           : 920
      };
      font["比"]        = {
        sC             : [
                           'F{AJ B­AJ BLAJAÃAv AuAÃAuB_ AuL8 C©L8 C©G% EaKL G§KL E8D{ C©D{ C©C6 C©C%CµB¼ CÁB¯D0B¯ GPB¯ F{AJ',
                           'L4D{ JTD{ JTC6 JTC%JbB¼ JoB¯J£B¯ O@B¯ NkAJ IZAJ H½AJHpAv HDAÃHDB_ HDL] JTL] JTF* L»K½ O<K½ L4D{'
                         ],
        xMin           : 25,
        xMax           : 895,
        yMin           : 4,
        yMax           : 717,
        wdth           : 920
      };
      font["凡"]        = {
        sC             : [
                           'H6IP I£C© GuC© F*IP H6IP',
                           'MNL] MNB¿ MNB«M[B| MiBoM{Bo OHBo NqAJ LsAJ L(AJKuA¡ K@B2K@B} K@J± DwJ± DwC* C_AJ AmAJ B§C* B§L] D0L] DwL] K@L] K{L] MNL]'
                         ],
        xMin           : 21,
        xMax           : 899,
        yMin           : 4,
        yMax           : 717,
        wdth           : 920
      };
      font["云"]        = {
        sC             : [
                           'BeJµ BeLa NNLa NNJµ BeJµ',
                           'B8Ak D«G0 AoG0 AoH¡ ODH¡ ODG0 G0G0 EBC8 L*C8 K%ED MJED ODAD M!AD L±Ak DcAk B8Ak'
                         ],
        xMin           : 22,
        xMax           : 897,
        yMin           : 1,
        yMax           : 719,
        wdth           : 920
      };

      return font;
    }
  }
);
