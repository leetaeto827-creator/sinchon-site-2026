import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <main className="page">
      <a href="tel:010-8039-9532" className="imageButton">
        <Image
          src="/idalin-banner.png"
          alt="트럼프 배너"
          width={900}
          height={500}
          className="bannerImage"
        />
      </a>

     <div style={{ textAlign: "center", margin: "30px 0" }}>
  <div style={{ height: "2px", background: "linear-gradient(to right, transparent, gold, transparent)", margin: "15px auto", width: "80%" }} />

 <h2 className="managerName">
  ✨ 이달인 실장 ✨
</h2>

  <p style={{ fontSize: "38px", fontWeight: "bold", color: "white", letterSpacing: "3px" }}>
    010-8039-9532
  </p>

  <div style={{ height: "2px", background: "linear-gradient(to right, transparent, gold, transparent)", margin: "15px auto", width: "80%" }} />
</div>


      <a href="tel:010-8039-9532" className="imageButton">
        <Image
          src="/new gir.png"
          alt="Excuse me 여자 배너"
          width={900}
          height={500}
          className="bannerImage"
        />
      </a>

      <div className="buttonBox">
        <a href="tel:010-8039-9532" className="goldButton">
          전화 문의
        </a>

        <a href="sms:010-8039-9532" className="goldButton">
          문자 문의
        </a>

        <section className="card hoverCard">
          <h2>마포,신촌 룸 가라오케 란?</h2>
          <p>
            프라이빗한 서비스가 포함되어 있는 프리미엄 힐링 공간입니다.
            부담 없이 문의하시면 친절하게 안내해드립니다.
          </p>
        </section>

        <section className="card hoverCard">
          <h2>Q&A</h2>
          <p>예약, 이용 시간, 문의 방법, 위치 등 궁금한 점은 언제든 연락 주세요.</p>
        </section>

        
      </div>
    </main>
  );
}