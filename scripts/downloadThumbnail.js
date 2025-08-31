#!/usr/bin/env node

/**
 * YouTube Thumbnail Downloader Script
 * Downloads high-quality thumbnails from YouTube videos
 *
 * Usage: node scripts/downloadThumbnail.js <videoId> [outputFile] [quality]
 *
 * Quality options: maxres, hq, mq, sd (default: maxres)
 *
 * Example: node scripts/downloadThumbnail.js dQw4w9WgXcQ my-thumbnail.jpg maxres
 */

import fs from "fs/promises"
import path from "path"
import { fileURLToPath } from "url"

// Get current directory for ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// YouTube thumbnail quality options with fallback order
const THUMBNAIL_QUALITIES = {
    maxres: "maxresdefault.jpg",
    hq: "hqdefault.jpg",
    mq: "mqdefault.jpg",
    sd: "sddefault.jpg",
}

/**
 * Downloads a YouTube thumbnail with specified quality
 * @param {string} videoId - YouTube video ID
 * @param {string} quality - Thumbnail quality (maxres, hq, mq, sd)
 * @returns {Promise<Buffer>} - Thumbnail image buffer
 */
async function downloadThumbnail(videoId, quality = "maxres") {
    if (!videoId || typeof videoId !== "string") {
        throw new Error("Invalid video ID provided")
    }

    // Validate video ID format (basic check)
    if (!/^[a-zA-Z0-9_-]{11}$/.test(videoId)) {
        throw new Error("Invalid YouTube video ID format")
    }

    const qualityKey = quality.toLowerCase()
    if (!THUMBNAIL_QUALITIES[qualityKey]) {
        throw new Error(
            `Invalid quality. Choose from: ${Object.keys(
                THUMBNAIL_QUALITIES
            ).join(", ")}`
        )
    }

    const url = `https://img.youtube.com/vi/${videoId}/${THUMBNAIL_QUALITIES[qualityKey]}`

    console.log(`🔍 Attempting to download ${qualityKey} quality thumbnail...`)
    console.log(`📡 URL: ${url}`)

    try {
        const response = await fetch(url, {
            headers: {
                "User-Agent":
                    "Mozilla/5.0 (compatible; YouTube-Thumbnail-Downloader/1.0)",
            },
        })

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`)
        }

        const buffer = Buffer.from(await response.arrayBuffer())

        if (buffer.length === 0) {
            throw new Error("Downloaded file is empty")
        }

        console.log(`✅ Successfully downloaded ${buffer.length} bytes`)
        return buffer
    } catch (error) {
        throw new Error(`Failed to download thumbnail: ${error.message}`)
    }
}

/**
 * Saves thumbnail to file system
 * @param {Buffer} buffer - Image buffer
 * @param {string} filename - Output filename
 * @param {string} quality - Thumbnail quality used
 */
async function saveThumbnail(buffer, filename, quality) {
    try {
        // Ensure images directory exists
        const imagesDir = path.join(process.cwd(), "public", "images")
        await fs.mkdir(imagesDir, { recursive: true })

        const filePath = path.join(imagesDir, filename)

        // Check if file already exists
        try {
            await fs.access(filePath)
            console.log(`⚠️  File already exists: ${filePath}`)

            // Create backup filename
            const timestamp = new Date().toISOString().replace(/[:.]/g, "-")
            const backupName = `${path.parse(filename).name}_${timestamp}${
                path.parse(filename).ext
            }`
            const backupPath = path.join(imagesDir, backupName)

            await fs.writeFile(backupPath, buffer)
            console.log(`💾 Backup saved as: ${backupName}`)
        } catch {
            // File doesn't exist, proceed normally
        }

        await fs.writeFile(filePath, buffer)
        console.log(`💾 Thumbnail saved to: ${filePath}`)

        // Get file stats
        const stats = await fs.stat(filePath)
        const fileSizeKB = (stats.size / 1024).toFixed(2)
        console.log(`📊 File size: ${fileSizeKB} KB`)
    } catch (error) {
        throw new Error(`Failed to save thumbnail: ${error.message}`)
    }
}

/**
 * Main function to download and save thumbnail
 * @param {string} videoId - YouTube video ID
 * @param {string} filename - Output filename
 * @param {string} quality - Thumbnail quality
 */
async function main(videoId, filename, quality = "maxres") {
    try {
        console.log("🚀 YouTube Thumbnail Downloader")
        console.log("=".repeat(40))
        console.log(`🎥 Video ID: ${videoId}`)
        console.log(`📁 Output: ${filename}`)
        console.log(`🎯 Quality: ${quality}`)
        console.log("")

        // Download thumbnail
        const buffer = await downloadThumbnail(videoId, quality)

        // Save to file system
        await saveThumbnail(buffer, filename, quality)

        console.log("")
        console.log("🎉 Success! Thumbnail downloaded and saved.")
    } catch (error) {
        console.error("")
        console.error("❌ Error:", error.message)
        console.error("")
        console.error("💡 Try using a different quality option:")
        console.error("   maxres - Maximum resolution (1920x1080)")
        console.error("   hq     - High quality (480x360)")
        console.error("   mq     - Medium quality (320x180)")
        console.error("   sd     - Standard quality (120x90)")
        process.exit(1)
    }
}

// Parse command line arguments
const [, , videoId, filename, quality] = process.argv

// Validate required arguments
if (!videoId) {
    console.error("❌ Error: Video ID is required")
    console.error("")
    console.error(
        "Usage: node scripts/downloadThumbnail.js <videoId> [outputFile] [quality]"
    )
    console.error("")
    console.error("Examples:")
    console.error("  node scripts/downloadThumbnail.js dQw4w9WgXcQ")
    console.error(
        "  node scripts/downloadThumbnail.js dQw4w9WgXcQ my-thumbnail.jpg"
    )
    console.error(
        "  node scripts/downloadThumbnail.js dQw4w9WgXcQ my-thumbnail.jpg maxres"
    )
    console.error("")
    console.error("Quality options: maxres, hq, mq, sd (default: maxres)")
    process.exit(1)
}

// Set default filename if not provided
const outputFilename = filename || `thumbnail_${videoId}.jpg`

// Run the main function
main(videoId, outputFilename, quality)
