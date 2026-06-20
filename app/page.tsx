import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <main className="page">
      <a href="tel:010-8039-9532" className="imageButton">
        <Image
          src="/trump - banner.png"
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
          src="/excuse - me - girl.png"
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
          <h2>셔츠룸 이란?</h2>
          <p>
            편안한 분위기에서 즐기는 프리미엄 힐링 공간입니다.
            부담 없이 문의하시면 친절하게 안내해드립니다.
          </p>
        </section>

        <section className="card hoverCard">
          <h2>Q&A</h2>
          <p>예약, 이용 시간, 문의 방법, 위치 등 궁금한 점은 언제든 연락 주세요.</p>
        </section>

        <section className="card hoverCard">
          <h2>공주님들 상시모집😎</h2>
          <p>
            확실한 갯수 보장!!.
            자세한 조건은 문자 또는 전화로 문의 주세요.
          </p>
        </section>
      </div>
    </main>
  );
}