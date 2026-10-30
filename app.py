#!/usr/bin/env python3.12
# unit —— 输一个数，长度重量温度面积体积速度存储时间全部换算好
# 纯前端算，这里只发一个空壳页面
import os

from flask import Flask, render_template

app = Flask(__name__)


@app.get("/")
def index():
    return render_template("page.html")


@app.get("/healthz")
def healthz():
    return "ok"


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=int(os.environ.get("UNIT_PORT", "8881")), debug=False)
