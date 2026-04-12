import useImageFallback from "../../../hooks/useImageFallback";

export default function ProjectCard({ project, cardRef }) {
  const [imgError, setImgError] = useImageFallback();

  return (
    <div
      ref={cardRef}
      className="project-card"
      style={{
        position: "sticky",
        top: "80px",
        borderRadius: "16px",
        overflow: "hidden",
        background: "#fff",
        border: "1px solid #e8e8e8",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        marginBottom: "24px",
        transformOrigin: "top center",
      }}
    >
      {/* Left */}
      <div style={{ padding: "36px 32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <span
            style={{
              fontSize: "11px",
              fontWeight: 700,
              padding: "4px 12px",
              borderRadius: "999px",
              marginBottom: "16px",
              background: project.tagBg,
              color: project.tagColor,
            }}
          >
            {project.tag}
          </span>

          <h2 style={{ fontSize: "28px", fontWeight: 800 }}>{project.title}</h2>
          <p style={{ fontSize: "14px", color: "#777" }}>{project.subtitle}</p>
        </div>

        <a href={project.link} style={{ background: "#111", color: "#fff", padding: "10px 22px", borderRadius: "999px" }}>
          View Site →
        </a>
      </div>

      {/* Right */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        {!imgError ? (
          <img
            src={project.imgSrc}
            alt={project.title}
            onError={() => setImgError(true)}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <div
            style={{
              height: "100%",
              background: project.imgFallbackBg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: 800,
            }}
          >
            {project.imgFallbackText}
          </div>
        )}
      </div>
    </div>
  );
}