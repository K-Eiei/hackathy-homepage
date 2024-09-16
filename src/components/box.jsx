export default function Box({ children, m = "0", ms = "0", me = "0", mt = "0", mb = "0", p = "0", ps = "0", pe = "0", pt = "0", pb = "0" }) {
    return (
        <div className={`w-full h-auto ${"m-" + m, "ms-" + ms, "me-" + me, "mt-" + mt, "mb-" + mb, "p-" + p, "ps-" + ps, "pe-" + pe, "pt-" + pt, "pb-" + pb} flex justify-center items-center`}>

            {children}

        </div>
    );
}