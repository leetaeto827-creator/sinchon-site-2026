export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #111827, #000000)",
      color: "white",
      fontFamily: "Arial, sans-serif",
      padding: "40px 20px"
    }}>
      <section style={{
        maxWidth: "900px",
        margin: "0 auto",
        textAlign: "center",
        paddingTop: "80px"
      }}>
        <p style={{ color: "#facc15", fontSize: "18px" }}>
          Sinchon Premium shirts room
        </p>

        <h1 style={{
          fontSize: "52px",
          marginBottom: "20px"
        }}>
          신촌 프리미엄 벗방 셔츠 룸
        </h1>

       <a
  href="tel:01080399532"
  style={{
    backgroundColor: "gold",
    color: "black",
    padding: "15px 30px",
    borderRadius: "30px",
    textDecoration: "none",
    fontWeight: "bold",
  }}
>
  ☎ 전화하기 (⭐이달인 실장⭐)
</a>

      <img
  src="/room.jpg"
  alt="룸 사진"
  style={{
    width: "100%",
    maxWidth: "1000px",
    borderRadius: "20px",
    marginTop: "50px",
  }}
/>


        <p style={{
          fontSize: "22px",
          color: "#d1d5db",
          lineHeight: "1.6"
        }}>
          깔끔한 공간, 섹시한 분위기, 신촌역 인근에서 즐기는 특별한 시간
        </p>

        <p
  style={{
    backgroundColor: "#6f23e9",
    color: "#000",
    padding: "12px 24px",
    borderRadius: "999px",
    display: "inline-block",
    fontSize: "24px",
    fontWeight: "bold",
    marginTop: "20px"
  }}
>
⭐ 이달인 실장을 찾아주세요 ⭐
</p>

        <div style={{ marginTop: "35px" }}>
          <button style={{
            background: "#facc15",
            color: "#111827",
            border: "none",
            padding: "16px 32px",
            fontSize: "18px",
            fontWeight: "bold",
            borderRadius: "999px",
            cursor: "pointer",
            marginRight: "12px"
          }}>
            전화 문의
          </button>

          <button style={{
            background: "transparent",
            color: "white",
            border: "1px solid #ffffff",
            padding: "16px 32px",
            fontSize: "18px",
            fontWeight: "bold",
            borderRadius: "999px",
            cursor: "pointer"
          }}>
            전화 및 문자 문의 010 8039 9532
          </button>
        </div>
      </section>

      <section style={{
        maxWidth: "900px",
        margin: "80px auto 0",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px"
      }}>
        <div>
          <h2>예약 안내</h2>
          <p>방문 전 문의하시면 빠르게 안내해드립니다.</p>
        </div>

        <div>
          <h2>위치 안내</h2>
          <p>서울 신촌역 인근, 접근성이 좋은 위치입니다.</p>
        </div>

        <div>
          <h2>상담 안내</h2>
          <p>전화 및 메신저 문의가 가능합니다.</p>
        </div>
      </section>

      <section style={{
        maxWidth: "900px",
        margin: "80px auto 0",
        background: "rgba(255,255,255,0.08)",
        padding: "40px",
        borderRadius: "24px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "32px" }}>문의하기</h2>
        <p style={{ color: "#d1d5db", fontSize: "18px" }}>
          신촌 프리미엄 벗방 셔츠룸 예약 및 위치 문의
        </p>
        <p style={{ fontSize: "24px", fontWeight: "bold", color: "#facc15" }}>
          010-8039-9532
        </p>
      </section>
    </main>
  );
}
