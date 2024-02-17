import { motion } from "framer-motion";

export const CrueShowing = () => {
  return (
    <div className="crue-box-showing">
      <div className="crue-photo"></div>
      <div className="crue-desc">
        <h3>Name</h3>
        <motion.p
          variants={{
            offview: { opacity: 0, y: -5 },
            onview: {
              opacity: 1,
              y: 0,
              transition: { delay: 1, ease: "easeInOut" },
            },
          }}
          initial={"offview"}
          whileInView={"onview"}
          viewport={{ once: true }}
        >
          yazem
        </motion.p>
        <h3>Quote</h3>
        <motion.p
          variants={{
            offview: { opacity: 0, y: -5 },
            onview: {
              opacity: 1,
              y: 0,
              transition: { delay: 1.5, ease: "easeInOut" },
            },
          }}
          initial={"offview"}
          whileInView={"onview"}
          viewport={{ once: true }}
        >
          bulan tidak harus purnama nan terang untuk dicintai,seperti itu juga
          dirimu.
        </motion.p>
        <h3>Skill</h3>
        <motion.ul
          variants={{
            offview: { opacity: 0, y: -5 },
            onview: {
              opacity: 1,
              y: 0,
              transition: { delay: 2, ease: "easeInOut" },
            },
          }}
          initial={"offview"}
          whileInView={"onview"}
          viewport={{ once: true }}
        >
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React Js</li>
          <li>Git</li>
          <li>Github</li>
          <li>Node Js</li>
          <li>Express Js</li>
        </motion.ul>
      </div>
    </div>
  );
};
