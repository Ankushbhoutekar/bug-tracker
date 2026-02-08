export default function Footer() {
  return (
    <footer
      style={{
        marginTop: 50,
        paddingTop: 15,
        textAlign: "center",
        fontSize: 14,
        color: "#64748b",
        borderTop: "1px solid #e5e7eb",
      }}
    >
      © {new Date().getFullYear()} Ankush Bhoutekar. All rights reserved.
    </footer>
  );
}

