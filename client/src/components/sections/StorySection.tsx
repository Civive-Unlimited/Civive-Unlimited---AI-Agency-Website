import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function StorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const storyBlocks = [
    {
      title: "The Truth: Work is Work.",
      content: `Whether you're diagnosing a faulty compressor, managing a laundromat's overhead, or keeping a law firm's documents organized—the struggle is the same. It's the battle against chaos. It's the hours wasted on tasks that don't grow your business. For 25 years, I was in the trenches of the service industry. I know that the "business" part of the job is often harder than the work itself.`,
    },
    {
      title: "The Journey: From Mechanical to Digital",
      content: `My path to AI wasn't a straight line. It led me from the rugged fields of Nevada to the discipleship program at Victory Mission in Springfield. I've spent the last 1.5 years rebuilding my life on a foundation of faith and grit. Today, while I maintain the campus at Central Assembly of God, I spend my nights in the Google Developer Program. I realized that the same "logical flow" I used to troubleshoot complex HVAC systems is exactly what powers the world's most advanced Artificial Intelligence. I stopped fixing machines with wrenches and started fixing businesses with code.`,
    },
    {
      title: "The Mission: Civive Unlimited",
      content: `I'm building Civive Unlimited in the open. I'm not a corporate suit with a polished sales pitch—I'm a builder. I've been obsessed with AI since 2021, and I've watched every tool evolve. Now, I'm taking that "day-one" energy and applying it to your business. Whether you run a local repair shop or a national retail chain, your limits are usually defined by your systems. I'm here to remove those limits.`,
    },
    {
      title: "The Promise: We Build Together",
      content: `I'm currently hand-selecting my founding partners—business owners who are ready to stop guessing and start scaling. I don't have a thousand clients yet. I have something better: The drive to make my first partners the most successful businesses in their industry. I'm a tradesman who mastered the machine. Let's build your future, unlimited.`,
    },
  ];

  return (
    <section id="story" className="relative py-24 overflow-hidden" ref={ref}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/J3m67B7PrlBhxWTfJXdOiD/sandbox/V1gqjDxB005ARii1hcDsca-img-3_1770181410000_na1fn_c3Rvcnktc2VjdGlvbi1iZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSjNtNjdCN1BybEJoeFdUZkpYZE9pRC9zYW5kYm94L1YxZ3FqRHhCMDA1QVJpaTFoY0RzY2EtaW1nLTNfMTc3MDE4MTQxMDAwMF9uYTFmbl9jM1J2Y25rdGMyVmpkR2x2YmkxaVp3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Uu7cYSb5RbGdGM8-IPGwxSJT4bDjwb8DwBFL5k~WLxYufmk~E9KvOCXs-uX4rGlFOcoIX0k9mdrsPv7QP21B~tFrd~rvOUD6OXGPCZlVGX1fZbsLxRroddXI6JmS3Uz7Zt6NLjPH-Kgj8g1lzvLBy6f21FQ3yztHeqosy9FRqRIzQr4fdp0wubi6Ah6Tj7HwPZYOOZsHudDRPUHXU6GfBOk0~plvEXuedid1aBGYfJ4R2kVfUCfFcMuFeJleNiY9laO~mkHRBhIGZI4wyb38AoE6xj45zARNSFelsW94rXqSVjDUm5xW~n6C0OBhdCXDz-nBVsDDlwdflni6~EayhA__')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Syne'] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">The Architecture of Efficiency</span>
          </h2>
          <p className="text-muted-foreground font-['Space_Grotesk'] text-lg max-w-2xl mx-auto">
            25 Years of Wrenches. Now, Algorithms.
          </p>
        </motion.div>

        {/* Banner Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="glass-card p-2 max-w-4xl mx-auto">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663329647955/HCufaaZRMvYAbtnv.jpg"
              alt="From Mechanical to Digital - Civive Unlimited"
              className="w-full rounded-lg"
            />
          </div>
        </motion.div>

        {/* Story Blocks */}
        <div className="max-w-4xl mx-auto space-y-12">
          {storyBlocks.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              className="glass-card p-8"
            >
              <h3 className="font-['Syne'] text-xl sm:text-2xl font-bold mb-4 text-[oklch(0.75_0.18_220)]">
                {block.title}
              </h3>
              <p className="font-['Space_Grotesk'] text-muted-foreground leading-relaxed text-base sm:text-lg">
                {block.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section Divider */}
      <div className="section-divider mt-24" />
    </section>
  );
}
