<ResponsiveContainer width="100%" height="100%">
  <BarChart
    width={500}
    height={200}
    data={data}
    margin={{
      top: 5,
      right: 5,
      left: 0,
      bottom: 5,
    }}
  >
    <XAxis
      padding={{ left: 10 }}
      dataKey="name"
      tickSize={0}
      axisLine={false}
      tick={{
        fill: "red",
        fontSize: 14,
      }}
    />
    <YAxis
      padding={{ bottom: 10, top: 10 }}
      tickFormatter={formatYAxisLabel}
      tickCount={6}
      axisLine={false}
      tickSize={0}
      tick={{
        fill: "red",
      }}
    />
    <Tooltip formatter={formatTooltipValue} cursor={{ fill: "transparent" }} />
    <Legend
      iconType="circle"
      iconSize={10}
      verticalAlign="top"
      align="right"
      formatter={formatLegendValue}
    />
    <Bar
      dataKey="uv"
      fill="#e3e7fc"
      activeBar={false}
      isAnimationActive={false}
      barSize={24}
      radius={[4, 4, 4, 4]}
    />
  </BarChart>
</ResponsiveContainer>;




  <ResponsiveContainer
            width="100%"
            height="100%"
            aspect={5 / 2}
            minWidth={100}
          >
            <BarChart
              data={data}
              className="plus_jakarta_sans_semibold text-sm font-semibold text-[#525252]"
            >
              <defs>
                <linearGradient
                  id="BarChartsGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#34CAA5" />
                  <stop offset="100%" stopColor="rgba(52, 202, 165, 0.00)" />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke=" " />
              <YAxis stroke="" />
              <Tooltip content={<CustomTooltip />} />

              <CartesianGrid y={-1000} stroke="#ccc" strokeDasharray="5 9" />
              <Bar
                isAnimationActive={false}
                activeBar={false}
                dataKey="uv"
                fill="url(#BarChartsGradient)"
                // fill="linear-gradient(180deg, #34CAA5 0%, rgba(52, 202, 165, 0.00) 100%);
                // "
                // fill="red"
                barSize={18}
                radius={[30, 30, 0, 0]}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={() => handleMouseEnter(index)}
                    fill={
                      hoveredBar === index
                        ? "url(#BarChartsGradient"
                        : "#34CAA51A"
                    }
                  />
                ))}
              </Bar>
            </BarChart>
            {/* <LineChart width={600} height={300} data={data}>
            jhvjd
            <CartesianGrid strokeDasharray="" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="basis" dataKey="pv" stroke="red" />
            <Line type="basis" dataKey="uv" stroke="green" />
          </LineChart> */}
          </ResponsiveContainer>



 <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={200}
              data={data}
              margin={{
                top: 5,
                right: 5,
                left: 0,
                bottom: 5,
              }}
            >
              <XAxis
                padding={{ left: 10 }}
                dataKey="name"
                tickSize={0}
                axisLine={false}
                tick={{
                  fill: "red",
                  fontSize: 14,
                }}
              />
              <YAxis
                padding={{ bottom: 10, top: 10 }}
                tickFormatter={formatYAxisLabel}
                tickCount={6}
                axisLine={false}
                tickSize={0}
                tick={{
                  fill: "red",
                }}
              />
              <Tooltip
                formatter={formatTooltipValue}
                cursor={{ fill: "transparent" }}
              />
              {/* <Legend
                iconType="circle"
                iconSize={10}
                verticalAlign="top"
                align="right"
                formatter={formatLegendValue}
              /> */}
              <defs>
                <linearGradient
                  id="BarChartsGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#34CAA5" />
                  <stop offset="100%" stopColor="rgba(52, 202, 165, 0.00)" />
                </linearGradient>
              </defs>
              <Tooltip content={<CustomTooltip />} />

              <CartesianGrid y={-1000} stroke="#ccc" strokeDasharray="5 9" />
              <Bar
                dataKey="uv"
                fill="url(#BarChartsGradient)"
                activeBar={false}
                isAnimationActive={false}
                barSize={24}
                radius={[25, 25, 4, 4]}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={() => handleMouseEnter(index)}
                    fill={
                      hoveredBar === index
                        ? "url(#BarChartsGradient"
                        : "#34CAA51A"
                    }
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>