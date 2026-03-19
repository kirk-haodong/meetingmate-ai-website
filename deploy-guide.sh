#!/bin/bash
# 部署 MeetingMate AI 网站到 Cloudflare Pages

echo "🚀 MeetingMate AI 快速部署指南"
echo "================================"
echo ""

echo "方案A：使用 Cloudflare Pages（推荐）"
echo "-------------------------------------"
echo "1. 访问 https://dash.cloudflare.com 注册/登录"
echo "2. 点击 'Pages' → 'Create a project'"
echo "3. 选择 'Upload assets'"
echo "4. 上传 ~/meetingmate-ai/website 目录下的所有文件"
echo "5. 获得域名：https://meetingmate-xxx.pages.dev"
echo ""

echo "方案B：使用 Vercel（最简单）"
echo "----------------------------"
echo "1. 访问 https://vercel.com 注册/登录"
echo "2. 点击 'Add New' → 'Project'"
echo "3. 选择 'Import Git Repository' 或直接上传"
echo "4. 部署完成后获得：https://meetingmate-xxx.vercel.app"
echo ""

echo "方案C：绑定自己的域名"
echo "---------------------"
echo "1. 在阿里云/腾讯云购买域名（约￥30-100/年）"
echo "2. 添加 DNS 解析记录："
echo "   A 记录 @ → 43.230.8.188"
echo "   A 记录 www → 43.230.8.188"
echo "3. 等待 DNS 生效（10分钟-48小时）"
echo "4. 访问 http://yourdomain.com"
echo ""

echo "📝 当前可用地址："
echo "  - 临时地址：https://margherita-mossier-erroneously.ngrok-free.dev"
echo "  - 本地地址：http://43.230.8.188:8080"
echo ""
