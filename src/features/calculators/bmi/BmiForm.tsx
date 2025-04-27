"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import type { BmiData } from "./BmiCalculator"

interface BmiFormProps {
    onCalculate: (height: number, weight: number, isMetric: boolean) => void
    initialData?: BmiData | null
}

export default function BmiForm({ onCalculate, initialData }: BmiFormProps) {
    const [isMetric, setIsMetric] = useState(true)
    const [height, setHeight] = useState({ value: "", error: "" })
    const [weight, setWeight] = useState({ value: "", error: "" })
    const [feet, setFeet] = useState({ value: "", error: "" })
    const [inches, setInches] = useState({ value: "", error: "" })

    // Initialize form with initial data if provided
    useEffect(() => {
        if (initialData) {
            setIsMetric(initialData.isMetric)

            if (initialData.isMetric) {
                setHeight({ value: initialData.height.toString(), error: "" })
            } else {
                // Convert height from inches to feet and inches
                const totalInches = initialData.height
                const ft = Math.floor(totalInches / 12)
                const inch = totalInches % 12
                setFeet({ value: ft.toString(), error: "" })
                setInches({ value: inch.toString(), error: "" })
            }

            setWeight({ value: initialData.weight.toString(), error: "" })
        }
    }, [initialData])

    const validateForm = (): boolean => {
        let isValid = true

        if (isMetric) {
            if (!height.value || isNaN(Number(height.value)) || Number(height.value) <= 0) {
                setHeight({ ...height, error: "Please enter a valid height" })
                isValid = false
            } else {
                setHeight({ ...height, error: "" })
            }
        } else {
            if (!feet.value || isNaN(Number(feet.value)) || Number(feet.value) < 0) {
                setFeet({ ...feet, error: "Please enter valid feet" })
                isValid = false
            } else {
                setFeet({ ...feet, error: "" })
            }

            if (!inches.value || isNaN(Number(inches.value)) || Number(inches.value) < 0 || Number(inches.value) >= 12) {
                setInches({ ...inches, error: "Please enter valid inches (0-11)" })
                isValid = false
            } else {
                setInches({ ...inches, error: "" })
            }
        }

        if (!weight.value || isNaN(Number(weight.value)) || Number(weight.value) <= 0) {
            setWeight({ ...weight, error: "Please enter a valid weight" })
            isValid = false
        } else {
            setWeight({ ...weight, error: "" })
        }

        return isValid
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) return

        let heightValue: number

        if (isMetric) {
            heightValue = Number(height.value)
        } else {
            // Convert feet and inches to inches
            heightValue = Number(feet.value) * 12 + Number(inches.value)
        }

        onCalculate(heightValue, Number(weight.value), isMetric)
    }

    const handleUnitToggle = (checked: boolean) => {
        setIsMetric(checked)

        // Reset form values when switching units
        setHeight({ value: "", error: "" })
        setFeet({ value: "", error: "" })
        setInches({ value: "", error: "" })
        setWeight({ value: "", error: "" })
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Label htmlFor="unit-toggle" className="text-sm font-medium">
                        {isMetric ? "Metric (cm/kg)" : "Imperial (ft/lbs)"}
                    </Label>
                    <Switch
                        id="unit-toggle"
                        checked={isMetric}
                        onCheckedChange={handleUnitToggle}
                        aria-label="Toggle between metric and imperial units"
                    />
                </div>
            </div>

            <div className="space-y-4">
                <div>
                    <Label htmlFor="height" className="text-sm font-medium">
                        Height {isMetric ? "(cm)" : "(ft & in)"}
                    </Label>

                    {isMetric ? (
                        <div className="mt-1.5">
                            <Input
                                id="height"
                                type="number"
                                placeholder="Height in centimeters"
                                value={height.value}
                                onChange={(e) => setHeight({ value: e.target.value, error: "" })}
                                className={height.error ? "border-red-500" : ""}
                                aria-invalid={!!height.error}
                                aria-describedby={height.error ? "height-error" : undefined}
                                min="1"
                                step="0.1"
                            />
                            {height.error && (
                                <p id="height-error" className="mt-1 text-sm text-red-500">
                                    {height.error}
                                </p>
                            )}
                        </div>
                    ) : (
                        <div className="mt-1.5 grid grid-cols-2 gap-2">
                            <div>
                                <Input
                                    id="feet"
                                    type="number"
                                    placeholder="Feet"
                                    value={feet.value}
                                    onChange={(e) => setFeet({ value: e.target.value, error: "" })}
                                    className={feet.error ? "border-red-500" : ""}
                                    aria-invalid={!!feet.error}
                                    aria-describedby={feet.error ? "feet-error" : undefined}
                                    min="0"
                                />
                                {feet.error && (
                                    <p id="feet-error" className="mt-1 text-sm text-red-500">
                                        {feet.error}
                                    </p>
                                )}
                            </div>
                            <div>
                                <Input
                                    id="inches"
                                    type="number"
                                    placeholder="Inches"
                                    value={inches.value}
                                    onChange={(e) => setInches({ value: e.target.value, error: "" })}
                                    className={inches.error ? "border-red-500" : ""}
                                    aria-invalid={!!inches.error}
                                    aria-describedby={inches.error ? "inches-error" : undefined}
                                    min="0"
                                    max="11"
                                />
                                {inches.error && (
                                    <p id="inches-error" className="mt-1 text-sm text-red-500">
                                        {inches.error}
                                    </p>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                <div>
                    <Label htmlFor="weight" className="text-sm font-medium">
                        Weight {isMetric ? "(kg)" : "(lbs)"}
                    </Label>
                    <div className="mt-1.5">
                        <Input
                            id="weight"
                            type="number"
                            placeholder={`Weight in ${isMetric ? "kilograms" : "pounds"}`}
                            value={weight.value}
                            onChange={(e) => setWeight({ value: e.target.value, error: "" })}
                            className={weight.error ? "border-red-500" : ""}
                            aria-invalid={!!weight.error}
                            aria-describedby={weight.error ? "weight-error" : undefined}
                            min="1"
                            step="0.1"
                        />
                        {weight.error && (
                            <p id="weight-error" className="mt-1 text-sm text-red-500">
                                {weight.error}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            <Button type="submit" className="w-full">
                Calculate BMI
            </Button>
        </form>
    )
}
