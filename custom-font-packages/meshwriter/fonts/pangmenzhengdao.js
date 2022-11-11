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
      font["a"]        = {
        sC             : [
                           'D¿Eµ GeEµ GeFyG;F¿ FµG@E»G@ BTG@ BTH³ E»H³ FµH³G@H® GoH©GÁHy I}H#IqEg IqAB E<AB D#ABCkAK C0ATB§Aq A±B@A±Cc A±DDB=D´ BmE_C:E{ C¡EµD¿Eµ'
                         ],
        hC             : [
                           ['GeBµ GeDB E0DB D¥DB DTDBD9D* CÁCµCÁCi CÁC:D?C% DaBµE0Bµ GeBµ']
                         ],
        xMin           : 38,
        xMax           : 535,
        yMin           : 0,
        yMax           : 487,
        wdth           : 595
      };
      font["b"]        = {
        sC             : [
                           'DPKy DPH³ F<H³ GXH³H:Ha I@GÁI}F¹ J%F0J%E6 J%B±HPA­ G¯AaGDAQ F}ABEyAB BDAB BDKy DPKy'
                         ],
        hC             : [
                           ['E¹G@ DPG@ DPBµ E¹Bµ F·BµGTCa G·D4G·E. G·G@E¹G@']
                         ],
        xMin           : 65,
        xMax           : 562,
        yMin           : 0,
        yMax           : 667,
        wdth           : 596
      };
      font["c"]        = {
        sC             : [
                           'E§H³ HsH³ HsG@ F2G@ D³G@DRFy C¹F4C¹E( C¹C¯DyCD DÃC(EOBÀ E¡BµFRBµ HsBµ HsAB E§AB DqABC½Aa CDA¡B¥BH A§CTA§E, A§G0B½H0 CVHeD*H{ D¡H³E§H³'
                         ],
        xMin           : 33,
        xMax           : 472,
        yMin           : 0,
        yMax           : 487,
        wdth           : 509
      };
      font["d"]        = {
        sC             : [
                           'EVH³ GRH³ GRKy I]Ky I]AB E³AB D§ABD<AX BµA±B>C, A§C¹A§E0 A§G*C,H4 C½H³EVH³'
                         ],
        hC             : [
                           ['E³Bµ GRBµ GRG@ E³G@ D³G@DNFk C·F!C·E0 C·C­DuCB E6BµE³Bµ']
                         ],
        xMin           : 33,
        xMax           : 525,
        yMin           : 0,
        yMax           : 667,
        wdth           : 591
      };
      font["e"]        = {
        sC             : [
                           'D,Eµ HaEµ HaDB D,DB D4CcDkC: DÃBµE½Bµ HaBµ HaAB E}AB D«ABD?AW CwAmC6A¿ A§C%A§E6 A§FgBcGk C!HDC}Hk DVH³EiH³ HaH³ HaG@ E}G@ D±G@DcF¾ D6FwD,Eµ'
                         ],
        xMin           : 33,
        xMax           : 463,
        yMin           : 0,
        yMax           : 487,
        wdth           : 507
      };
      font["f"]        = {
        sC             : [
                           'B·AB B·G@ AgG@ AgH³ B·H³ B·IJ B·JiCWK0 C½KyE0Ky F½Ky F½J( EµJ( DÁJ,DÃI< DÃH³ F¿H³ F¿G@ DÃG@ DÃAB B·AB'
                         ],
        xMin           : 18,
        xMax           : 365,
        yMin           : 0,
        yMax           : 667,
        wdth           : 380
      };
      font["g"]        = {
        sC             : [
                           'EwH³ IkH³ IkAH Ik@wIW@6 ID?wHÃ?J Hs>µH1>~ Gq>iFu>i B_>i B_@8 FP@8 G(@8GC@S G_@oG_AB EiAB DsABD$A[ CXAuB½B. A«C8A«E* A«G>C:H< C{HkDAH~ D«H³EwH³'
                         ],
        hC             : [
                           ['G_Bµ G_G@ E£G@ C»G@C»E( C»CÃDWCY D¹BµE±Bµ G_Bµ']
                         ],
        xMin           : 35,
        xMax           : 532,
        yMin           : -173,
        yMax           : 487,
        wdth           : 598
      };
      font["h"]        = {
        sC             : [
                           'BDKy DPKy DPH³ FcH³ G]H³GÄH~ HgHkH¹H: IsGgIsEÃ IsAB GgAB GgEm GgF:G`F[ GXF}GBF· F½G>F*G@ DPG@ DPAB BDAB BDKy'
                         ],
        xMin           : 65,
        xMax           : 536,
        yMin           : 0,
        yMax           : 667,
        wdth           : 596
      };
      font["i"]        = {
        sC             : [
                           'DPIu BDIu BDKy DPKy DPIu',
                           'BDAB BDH³ DPH³ DPAB BDAB'
                         ],
        xMin           : 65,
        xMax           : 199,
        yMin           : 0,
        yMax           : 667,
        wdth           : 266
      };
      font["j"]        = {
        sC             : [
                           'DµI} B«I} B«Ky DµKy DµI}',
                           'B«H³ DµH³ DµA³ Dµ@§Dy@5 D_?gCÁ?4 CF>oA­>i @·>i @·@2 AX@2 BL@4Bm@_ B}@sB¥@´ B«A0B«A{ B«H³'
                         ],
        xMin           : -23,
        xMax           : 232,
        yMin           : -173,
        yMax           : 667,
        wdth           : 297
      };
      font["k"]        = {
        sC             : [
                           'BDKy DPKy DPE± G6H³ IcH³ FgE± G.E± H:E±HqE< I%DkI%B½ I%AB F½AB F½C% F½C¥F}CÄ F_D@E©D@ DPD@ DPAB BDAB BDKy'
                         ],
        xMin           : 65,
        xMax           : 528,
        yMin           : 0,
        yMax           : 667,
        wdth           : 543
      };
      font["l"]        = {
        sC             : [
                           'DPKy DPAB BDAB BDKy DPKy'
                         ],
        xMin           : 65,
        xMax           : 199,
        yMin           : 0,
        yMax           : 667,
        wdth           : 266
      };
      font["m"]        = {
        sC             : [
                           'BDAB BDH³ I¿H³ K!H³KiH} L.HiL_H6 M6GVM6F. M6AB K*AB K*E§ K*FJK#Fg JÁF¥J«F» J_G@I­G@ H}G@ H}AB FqAB FqG@ DPG@ DPAB BDAB'
                         ],
        xMin           : 65,
        xMax           : 762,
        yMin           : 0,
        yMax           : 487,
        wdth           : 822
      };
      font["n"]        = {
        sC             : [
                           'BDAB BDH³ FHH³ G<H³GzH¢ H6HoHiHB INGeINE½ INAB GBAB GBF8 GBF£G!FÃ F¥G@F8G@ DPG@ DPAB BDAB'
                         ],
        xMin           : 65,
        xMax           : 518,
        yMin           : 0,
        yMax           : 487,
        wdth           : 578
      };
      font["o"]        = {
        sC             : [
                           'E©HÁ G·HÁH·G¥ I­FuI­D¿ I­C8HwB0 GoA4E¥A4 C±A4B§B@ A§C>A§E0 A§F}B¡G§ C©H¿E©HÁ'
                         ],
        hC             : [
                           ['E«GR C¹GRC¹E% C¹D,D>Cm D£B£E­B£ GyB£GyE* GyGNE«GR']
                         ],
        xMin           : 33,
        xMax           : 548,
        yMin           : -7,
        yMax           : 494,
        wdth           : 582
      };
      font["p"]        = {
        sC             : [
                           'BD>T BDH³ E»H³ FÃH³GgH¢ H,HoHmH< I½G4I½D½ I½CDH½B@ HZA¡GªAa G4ABF<AB DPAB DP>T BD>T'
                         ],
        hC             : [
                           ['E©G@ DPG@ DPBµ EuBµ FwBµG2CJ G©C·G©E. G©F2GDFz F¥G@E©G@']
                         ],
        xMin           : 65,
        xMax           : 556,
        yMin           : -183,
        yMax           : 487,
        wdth           : 589
      };
      font["q"]        = {
        sC             : [
                           'E©H³ IgH³ Ig>T GZ>T GZAB EZAB C{ABB¥BD A§CLA§DÁ A§G4C4H< CsHoD8H¢ D¡H³E©H³'
                         ],
        hC             : [
                           ['GZBµ GZG@ E»G@ D¿G@DZFz C»F2C»E* C»CÃD]CY DÃBµF!Bµ GZBµ']
                         ],
        xMin           : 33,
        xMax           : 530,
        yMin           : -183,
        yMax           : 487,
        wdth           : 596
      };
      font["r"]        = {
        sC             : [
                           'BDAB BDH³ EPH³ FJH³F°H¢ GPHoG}HF H(GÁH:Gc HLG%HLF6 HLEX FJEX FJE¯ FJFuF%F½ E¥G@D¿G@ DPG@ DPAB BDAB'
                         ],
        xMin           : 65,
        xMax           : 453,
        yMin           : 0,
        yMax           : 487,
        wdth           : 468
      };
      font["s"]        = {
        sC             : [
                           'DVH³ HµH³ HµG@ E8G@ DgG@DPG8 D!G(D!Fk D!F6DNE½ DgE­EPE­ FoE­ G©E­H_EJ I@D¥I@Cw I@B¯H§B4 HXAoG¼AX GZABFFAB A¿AB A¿Bµ E{Bµ FRBµFsB· G:B¿G:Cg G:D!F­D8 FsDDE¹DD DuDD C·DDCbDP C.D]B¥D} BLE!B-Ef A±F(A±Fu A±G©ByH] C8H³DVH³'
                         ],
        xMin           : 38,
        xMax           : 511,
        yMin           : 0,
        yMax           : 487,
        wdth           : 548
      };
      font["t"]        = {
        sC             : [
                           'AcH³ B¯H³ B¯Ky D»Ky D»H³ F³H³ F³G@ D»G@ D»D_ D»CcE.CB EPBµF%Bµ F³Bµ F³AB ENAB CÃABCVA¹ B¯BkB¯D0 B¯G@ AcG@ AcH³'
                         ],
        xMin           : 16,
        xMax           : 359,
        yMin           : 0,
        yMax           : 667,
        wdth           : 385
      };
      font["u"]        = {
        sC             : [
                           'EDBµ G@Bµ G@H³ ILH³ ILAB E<AB DJABC¯AS CNAeBÁA³ B8BmB8D: B8H³ DBH³ DBCÁ DBC]DfC7 D«BµEDBµ'
                         ],
        xMin           : 59,
        xMax           : 517,
        yMin           : 0,
        yMax           : 487,
        wdth           : 583
      };
      font["v"]        = {
        sC             : [
                           'CsH³ EkCs G{H³ I¹H³ FsAB DRAB ANH³ CsH³'
                         ],
        xMin           : 6,
        xMax           : 554,
        yMin           : 0,
        yMax           : 487,
        wdth           : 561
      };
      font["w"]        = {
        sC             : [
                           'EcBµ FsBµ FsH³ H¡H³ H¡Bµ JÁBµ JÁH³ M(H³ M(AB EPAB DJABC§AV C>AkB³A¿ B8B}B8D# B8H³ DBH³ DBDN DBC«DICm DPCPDeC: D±BµEcBµ'
                         ],
        xMin           : 59,
        xMax           : 755,
        yMin           : 0,
        yMax           : 487,
        wdth           : 822
      };
      font["x"]        = {
        sC             : [
                           'AHAB D6E# AVH³ C¥H³ EPFq F¹H³ IRH³ FgE# IRAB F¹AB EPCX C¥AB AHAB'
                         ],
        xMin           : 3,
        xMax           : 520,
        yMin           : 0,
        yMax           : 487,
        wdth           : 525
      };
      font["y"]        = {
        sC             : [
                           'EgBµ GBBµ GBH³ INH³ INAV IN?»Hk?@ G©>iF,>i BN>i BN@8 F,@8 F¥@8F¿@J G0@VG6@j G<@}GBAB ETAB B8A8BNDq BNH³ DZH³ DZD­ DZCsDvCB D³BµEgBµ'
                         ],
        xMin           : 70,
        xMax           : 518,
        yMin           : -173,
        yMax           : 487,
        wdth           : 573
      };
      font["z"]        = {
        sC             : [
                           'A¡B¯ F2G@ A¡G@ A¡H³ H·H³ H·GF DaBµ H·Bµ H·AB A¡AB A¡B¯'
                         ],
        xMin           : 30,
        xMax           : 489,
        yMin           : 0,
        yMax           : 487,
        wdth           : 526
      };
      font["A"]        = {
        sC             : [
                           'C·AB AHAB EqKy H6Ky L_AB IµAB H³Cw D¹Cw C·AB'
                         ],
        hC             : [
                           ['HREe F·I6 EVEe HREe']
                         ],
        xMin           : 3,
        xMax           : 718,
        yMin           : 0,
        yMax           : 667,
        wdth           : 722
      };
      font["B"]        = {
        sC             : [
                           'H,AB BJAB BJKy H<Ky IoKyJ>KN J¿JÃKLJ4 KoIkKoH½ KoH2K7GX J£F¡J,F] KoE§KoD! KoBÃK0BH J{A}J%A` IRABH,AB'
                         ],
        hC             : [
                           ['DgEg DgC0 GiC0 H%C0HBC6 H_C<HwCP I4C£I4DT I4E#H{EJ HPEgGoEg DgEg','DgI­ DgGT GiGT H%GTHAGZ H]GaHwGu I4H#I4Hy I4IHH{Io HPI­GoI­ DgI­']
                         ],
        xMin           : 68,
        xMax           : 662,
        yMin           : 0,
        yMax           : 667,
        wdth           : 698
      };
      font["C"]        = {
        sC             : [
                           'G(C0 J@C0 J@AB FoAB EkABE#AP C.A£BFCc A¥D{A¥FZ A¥HgBkI± C6J«D5K@ E4KyF}Ky J@Ky J@I­ F¿I­ E_I­D©I# D<HPD<Fu D<DLE.Cq E¡C0G(C0'
                         ],
        xMin           : 32,
        xMax           : 575,
        yMin           : 0,
        yMax           : 667,
        wdth           : 606
      };
      font["D"]        = {
        sC             : [
                           'BJAB BJKy F£Ky HTKyIHKN JÁJ£KgI0 K¿G³K¿FZ K¿E%KiC© K4BcJ<A· IqAeH¸AS H:ABF£AB BJAB'
                         ],
        hC             : [
                           ['F£I­ DgI­ DgC0 F£C0 H:C0H¥C¥ I.D6IID· IeEsIeF] IeGRIDH4 I#H¹HqIF H#I­F£I­']
                         ],
        xMin           : 68,
        xMax           : 685,
        yMin           : 0,
        yMax           : 667,
        wdth           : 716
      };
      font["E"]        = {
        sC             : [
                           'FTKy J2Ky J2I­ G@I­ F0I­EoIw E,IcD£I( DcH£DWHX DLH0DDGP J2GP J2Ec DDEc DTD6E*Ct E£C0GNC0 J2C0 J2AB G@AB F*ABE8AT C§AsB½Bs A¥D*A¥Fe A¥I@CXJ¥ D!KDDvK_ EHKyFTKy'
                         ],
        xMin           : 32,
        xMax           : 568,
        yMin           : 0,
        yMax           : 667,
        wdth           : 612
      };
      font["F"]        = {
        sC             : [
                           'DTGV JqGV JqEi DTEi DTAB B:AB B:F{ B<I%BsI§ C6J«D7K@ E8KyG!Ky JqKy JqI­ GFI­ E£I©EHIk DXI<DTGÁ DTGV'
                         ],
        xMin           : 60,
        xMax           : 599,
        yMin           : 0,
        yMax           : 667,
        wdth           : 636
      };
      font["G"]        = {
        sC             : [
                           'F4Em F4GZ KBGZ KBAB FoAB ETABDzAY CÁAqCTB* A¥CLA¥FX A¥HZBgI© C0J§D0K> E0KyF}Ky KBKy KBI­ F¿I­ EkI­D½I< D:HaD:Fs D:EyDSD¹ DmD4D»C§ E>CXE¤CD FDC0G%C0 I(C0 I(Em F4Em'
                         ],
        xMin           : 32,
        xMax           : 640,
        yMin           : 0,
        yMax           : 667,
        wdth           : 691
      };
      font["H"]        = {
        sC             : [
                           'HkKy J§Ky J§AB HkAB HkEk DgEk DgAB BJAB BJKy DgKy DgGX HkGX HkKy'
                         ],
        xMin           : 68,
        xMax           : 609,
        yMin           : 0,
        yMax           : 667,
        wdth           : 677
      };
      font["I"]        = {
        sC             : [
                           'DgAB BJAB BJKy DgKy DgAB'
                         ],
        xMin           : 68,
        xMax           : 210,
        yMin           : 0,
        yMax           : 667,
        wdth           : 277
      };
      font["J"]        = {
        sC             : [
                           'C¯AB A_AB A_C0 CoC0 DoC0E+C9 EiCBE«C_ F4C£FED@ FVD£FVE­ FVKy HqKy HqE­ HqD¡HgD6 H]CoH>C. GsA§F*AT EJABC¯AB'
                         ],
        xMin           : 14,
        xMax           : 471,
        yMin           : 0,
        yMax           : 667,
        wdth           : 532
      };
      font["K"]        = {
        sC             : [
                           'HTAB DqFe HoKy KeKy G6Fe KJAB HTAB',
                           'BJKy DgKy DgAB BJAB BJKy'
                         ],
        xMin           : 68,
        xMax           : 657,
        yMin           : 0,
        yMax           : 667,
        wdth           : 659
      };
      font["L"]        = {
        sC             : [
                           'B:E­ B:Ky DTKy DTE­ DZD}DaDN DoCsE8CQ E¥C0G<C0 ILC0 ILAB FÁAB EHABDiAZ B¯A½BPCs B:DFB:E­'
                         ],
        xMin           : 60,
        xMax           : 517,
        yMin           : 0,
        yMax           : 667,
        wdth           : 532
      };
      font["M"]        = {
        sC             : [
                           'BDKy EcKy H.Cg J¯Ky N*Ky N*AB K¿AB K¿I* I@AB F¿AB DRI* DRAB BDAB BDKy'
                         ],
        xMin           : 65,
        xMax           : 820,
        yMin           : 0,
        yMax           : 667,
        wdth           : 889
      };
      font["N"]        = {
        sC             : [
                           'H{AB DZH· DZAB BJAB BJKy E6Ky IHC¹ IHKy KVKy KVAB H{AB'
                         ],
        xMin           : 68,
        xMax           : 650,
        yMin           : 0,
        yMax           : 667,
        wdth           : 718
      };
      font["O"]        = {
        sC             : [
                           'F·K£ H]K£IuK< K%JkKoI* L%G·L%FJ L%D¡KcCi J¯B6IZAo HVA:G*A: EHA:D!A± B¹BTBLCk A¥D£A¥FV A¥ITC@Jw DaK¡F·K£'
                         ],
        hC             : [
                           ['F¹IÃ ERIÃD¡HÃ D:H<D:F_ D:DuD±C© EcB½F»B½ HHB½H¾C« IoDwIoF] IoH.I*H¿ H]IÁF¹IÃ']
                         ],
        xMin           : 32,
        xMax           : 690,
        yMin           : -4,
        yMax           : 671,
        wdth           : 722
      };
      font["P"]        = {
        sC             : [
                           'H.D· DgD· DgAB BJAB BJKy GeKy H½KyIiK_ JmK2K8J( KqI@KqHF KqGaKKF¨ K%F*JeEq J(E<IfE( I!D·H.D·'
                         ],
        hC             : [
                           ['DgI­ DgF¥ GiF¥ HPF¥H{G! I8GTI8HP I8IVHZI} H8I­GoI­ DgI­']
                         ],
        xMin           : 68,
        xMax           : 663,
        yMin           : 0,
        yMax           : 667,
        wdth           : 685
      };
      font["Q"]        = {
        sC             : [
                           'J·C0 LwC0 LwAB H¥AB G¹AB FoABF0AG EsALD¿Aa C<A·BRCa A¥D}A¥FV A¥IRC@Jw DcK£F·K£ H_K£IuK< JRJ³J±JP KJI³KoI* L(G¯L(Fg L(DgJ·C0'
                         ],
        hC             : [
                           ['F¹IÃ EgIÃD´I5 D<HJD<Fq D<E2DuD< E>C!F»C! HeC!I2D0 IoD¿IoFk IoH%I%H¿ HTIÁF¹IÃ']
                         ],
        xMin           : 32,
        xMax           : 730,
        yMin           : 0,
        yMax           : 671,
        wdth           : 756
      };
      font["R"]        = {
        sC             : [
                           'FJE< DgE< DgAB BJAB BJKy GVKy IoKyJ]K0 K(J£KQJ1 K{IcK{H§ K{GFJ½F_ J_EÃI}E£ JJEeJsEE J½E%K:Dk KRD:K^C± KiCcKoB¯ K{A}K±AB IPAB IBAqI2B£ I(CuH¬D2 HkDqH,D· G_E>FJE<'
                         ],
        hC             : [
                           ['DgI­ DgG* GuG* HXG*H¥GH IBGuIBHc IBI]HcI¡ H@I­GuI­ DgI­']
                         ],
        xMin           : 68,
        xMax           : 678,
        yMin           : 0,
        yMax           : 667,
        wdth           : 714
      };
      font["S"]        = {
        sC             : [
                           'GcAB BDAB BDC0 G%C0 H8C0HiCL I.CwI.DJ I.E,H]EX H.EsGHEs EPEs CoEsB­FD BLFyB)GF A©G·A©Ho A©I{BXJo C(K_DXKs D·KyE­Ky JÃKy JÃI­ FJI­ EDI«D»I¡ D>IiD>Hw D>G¹D­Gw E<G_F2G_ G«G_ I,G_I}GB J­FµK@E½ KkE:KkDL KkCRK2Bs JeAkIHAN H}ABGcAB'
                         ],
        xMin           : 34,
        xMax           : 660,
        yMin           : 0,
        yMax           : 667,
        wdth           : 695
      };
      font["T"]        = {
        sC             : [
                           'DsAB DsI­ AJI­ AJKy JHKy JHI­ F±I­ F±AB DsAB'
                         ],
        xMin           : 4,
        xMax           : 579,
        yMin           : 0,
        yMax           : 667,
        wdth           : 584
      };
      font["U"]        = {
        sC             : [
                           'B:Ky DTKy DTEX DTDyDeDC DuC±D½Ci EoB¹F§B¹ GeB¹H+C7 HsCXH±C³ I*DHI*EX I*Ky KFKy KFEg KFDJK$Cf J§B£J@BB I!A8F£A8 DJA8C<B@ BsB©BVC^ B:D4B:ER B:Ky'
                         ],
        xMin           : 60,
        xMax           : 642,
        yMin           : -5,
        yMax           : 667,
        wdth           : 703
      };
      font["V"]        = {
        sC             : [
                           'I½Ky LZKy GµAB EwAB ADKy C§Ky F¯C¯ I½Ky'
                         ],
        xMin           : 1,
        xMax           : 716,
        yMin           : 0,
        yMax           : 667,
        wdth           : 718
      };
      font["W"]        = {
        sC             : [
                           'A]Ky C¥Ky F.C¯ HFKy J¥Ky L½C¯ OFKy QkKy N<AB KyAB IeH§ GPAB D¯AB A]Ky'
                         ],
        xMin           : 13,
        xMax           : 1044,
        yMin           : 0,
        yMax           : 667,
        wdth           : 1057
      };
      font["X"]        = {
        sC             : [
                           'AJAB D³Fe AZKy D6Ky F<H@ HXKy K0Ky GmFe K0AB HcAB F<D¯ C¿AB AJAB'
                         ],
        xMin           : 4,
        xMax           : 631,
        yMin           : 0,
        yMax           : 667,
        wdth           : 637
      };
      font["Y"]        = {
        sC             : [
                           'E4AB E4E­ AFKy CµKy FDGo H©Ky KXKy GPE£ GPAB E4AB'
                         ],
        xMin           : 2,
        xMax           : 651,
        yMin           : 0,
        yMax           : 667,
        wdth           : 653
      };
      font["Z"]        = {
        sC             : [
                           'A¯C( HTI­ A¯I­ A¯Ky JµKy JµI¥ DgC0 JµC0 JµAB A¯AB A¯C('
                         ],
        xMin           : 37,
        xMax           : 616,
        yMin           : 0,
        yMax           : 667,
        wdth           : 654
      };
      font["0"]        = {
        sC             : [
                           'F³K¡ I«K¡K#J6 L(H¯L(F] L(CsJ{BL I]A:G4A: D(A:B£B· A§D8A§Fa A§I6C"JY DBK}F³K¡'
                         ],
        hC             : [
                           ['F­IÃ F0IÃEhIz DÁIRDyH¯ D_HaDMG° D<G:D<Fm D<EµDNE8 DaD_D{D, EHB½G%B½ GÃB½HcCL I>C³IZD¹ IqE¡IqFi IqGNIXH& I@H£H»I2 HqIeH(I¤ GaIÁF­IÃ']
                         ],
        xMin           : 33,
        xMax           : 691,
        yMin           : -4,
        yMax           : 670,
        wdth           : 724
      };
      font["1"]        = {
        sC             : [
                           'DgKy DgAB BJAB BJKy DgKy'
                         ],
        xMin           : 68,
        xMax           : 210,
        yMin           : 0,
        yMax           : 667,
        wdth           : 278
      };
      font["2"]        = {
        sC             : [
                           'D%D# D%C. J±C. J±AB A¯AB A¯D# A«E§B}F{ C2G.CsG@ D2GRE:GR F·GR G¥GRH0Gm HyG¹HyHi HyIBH6Im G§I­F·I­ AÃI­ AÃKy GPKy IPKyJ4K! JqJsJ³IÄ K0IPK0Hs K0G¡J«G$ JaFLI½F! I2EeGcEe F%Ee EBEeD´EX DaELDHE, D(D¯D%D#'
                         ],
        xMin           : 37,
        xMax           : 631,
        yMin           : 0,
        yMax           : 667,
        wdth           : 661
      };
      font["3"]        = {
        sC             : [
                           'FPAB A§AB A§C. F@C. G6C.GaCP G·C{G·DL G·E0GREV G(EoF@Eo B¥Eo B¥GZ F@GZ G>GZGeG{ GµGÃGµHq GµIHGVIq G@I£G"I¨ F©I­F@I­ A§I­ A§Ky FsKy GwKwG¾Ks H@KoHmK_ ITK8I³JR JLIuJLH« JLGNH½Fg JLEsJLD# JLBgI<A­ H}AaH1AQ GgABFPAB'
                         ],
        xMin           : 33,
        xMax           : 581,
        yMin           : 0,
        yMax           : 667,
        wdth           : 619
      };
      font["4"]        = {
        sC             : [
                           'H<C* AsC* AsED GcKy JXKy JXD¹ K«D¹ K«C* JXC* JXAB H<AB H<C*'
                         ],
        hC             : [
                           ['H<IP D0D¹ H<D¹ H<IP']
                         ],
        xMin           : 24,
        xMax           : 675,
        yMin           : 0,
        yMax           : 667,
        wdth           : 706
      };
      font["5"]        = {
        sC             : [
                           'B4Ky J}Ky J}I­ DNI­ DNGZ GwGZ HsGZI;GJ I§G:J8Fµ KDF(KDD] KDBZImAw H{ABF}AB B4AB B4C. F}C. GuC.H4CB H]CPHtCv H­C½H­DL H­D§HqE- HVEVH,Ec G­EmF}Eo B4Eo B4Ky'
                         ],
        xMin           : 57,
        xMax           : 641,
        yMin           : 0,
        yMax           : 667,
        wdth           : 676
      };
      font["6"]        = {
        sC             : [
                           'DBGT G§GT H¿GTIfGD J.G4JaF­ KcEÃKcDa KcB}IÁA§ I#A:G%A: EqA:D¥AZ C·A{CDBD BcC!B0D< A§ELA§F_ A§H>BaIs C>K(D{KZ EcKyG.Ky J½Ky J½I­ G§I­ EyI±E(IV DyI4D_Hr DDH.DBGT'
                         ],
        hC             : [
                           ['GTEg DBEg DDDTD}C£ E!CFEeC0 F%B½G*B½ G{B½H(C# HVC.HwCF I*CoI*DB I*D½HkEH H@EgGTEg']
                         ],
        xMin           : 33,
        xMax           : 656,
        yMin           : -4,
        yMax           : 667,
        wdth           : 691
      };
      font["7"]        = {
        sC             : [
                           'AwKy J£Ky J£I­ DXAB A}AB HBI­ AwI­ AwKy'
                         ],
        xMin           : 26,
        xMax           : 607,
        yMin           : 0,
        yMax           : 667,
        wdth           : 631
      };
      font["8"]        = {
        sC             : [
                           'CVF] BiFÁB<Gg A³H.A³HÁ A³J¯CgK] D@K¡FgK¡ HBK¡H¼Ky IqKsJ(K] J»K0KPJB K}IoK}H± K}G6J.F] J­F(K0E{ KwE#KwD( KwB·J§AÃ JLAgIeAP H}A:G%A: E½A:DÁA@ CgAFB§AÃ A±B±A±D! A±D½BTEs B{F#CVF]'
                         ],
        hC             : [
                           ['F¥Eu ETEuE!Ea DHE>DHDF DHCBE*C% EDBÁF¥B½ G»B¿H6BÂ HTC!HkC, I<CLI<DB I<EFHPEg GÃEuF¥Eu','F§IÃ EVIÃE#I± DHIoDHHy DHGyE,G] EFGTF©GP GÁGTH;GV HXGXHqGa IDG¥IDHs IDIuHTIµ H#IÃF§IÃ']
                         ],
        xMin           : 38,
        xMax           : 669,
        yMin           : -4,
        yMax           : 670,
        wdth           : 707
      };
      font["9"]        = {
        sC             : [
                           'I(Eg EiEg DNEgC¨Ev C<E§B­F. A«F»A«HZ A«J<CNK4 DHK¡FFK¡ G{K¡HiK` IVK@J(Jw J­I»K:H} KgGmKgFZ KgD}J­CH J,A³HqA_ G«ABF<AB BPAB BPC. EiC. GuC*HBCc HsC§H°DH I(D¯I(Eg'
                         ],
        hC             : [
                           ['E»GR I(GR I(HeHoI: HJIsG«I¬ GFIÃFHIÃ E6IÃD§I¡ D@IRD@Hu D@GÁD¥Gq E*GRE»GR']
                         ],
        xMin           : 35,
        xMax           : 658,
        yMin           : 0,
        yMax           : 670,
        wdth           : 691
      };

      return font;
    }
  }
);
